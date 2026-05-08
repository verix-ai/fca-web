// Translates the existing ReferralFormPage state shape into the Edge Function payload
// (which mirrors the staff app's referrals.notes JSON contract) and posts it.

const SUBMIT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-referral`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SERVICE_LABELS: Record<string, string> = {
  ambulatingTransferring: 'Ambulating/Transferring',
  bathing: 'Bathing',
  dressing: 'Dressing',
  feeding: 'Feeding',
  hygieneGrooming: 'Hygiene/Grooming',
  basicHousekeeping: 'Basic Housekeeping',
  errandAssistance: 'Errand Assistance',
  emergencyResponse: 'Emergency Response/Alert System or Device',
  suppliesRequired: 'Do you require supplies to accommodate your individual needs?',
};

export interface FormState {
  serviceProgramRequested: string;
  referralName: string;
  sex: 'Female' | 'Male' | 'Prefer not to say' | '';
  referralDOB: string;
  gaMedicaidOrSSN: string;
  phone: string;
  caregiverName: string;
  caregiverRelationship: string;
  caregiverPhone: string;
  streetAddress: string;
  aptSuite: string;
  city: string;
  zipCode: string;
  county: string;
  state: string;
  caregiverLivesInHome: 'Yes' | 'No' | '';
  receivesBenefits: 'Yes' | 'No' | '';
  benefitsReceivedOn: '1st' | '3rd' | '';
  physicianNameLocation: string;
  memberDiagnosis: string;
  servicesRequested: Record<keyof typeof SERVICE_LABELS, boolean>;
  hearAboutUs: string;
  otherSource: string;
  additionalInfo: string;
}

export async function submitReferral(slug: string, form: FormState, honeypot: string) {
  const services_needed = (Object.keys(form.servicesRequested) as (keyof typeof SERVICE_LABELS)[])
    .filter((k) => form.servicesRequested[k])
    .map((k) => SERVICE_LABELS[k]);

  const heard =
    form.hearAboutUs === 'Other (specify)' && form.otherSource
      ? `Other: ${form.otherSource}`
      : form.hearAboutUs;

  const payload = {
    slug,
    hp: honeypot, // honeypot — must be empty
    referral_name: form.referralName,
    sex: form.sex,
    referral_dob: form.referralDOB,
    medicaid_or_ssn: form.gaMedicaidOrSSN,
    phone: form.phone,
    caregiver_name: form.caregiverName,
    caregiver_relationship: form.caregiverRelationship,
    caregiver_phone: form.caregiverPhone,
    caregiver_lives_in_home: form.caregiverLivesInHome,
    address_line1: form.streetAddress,
    address_line2: form.aptSuite || undefined,
    city: form.city,
    zip: form.zipCode,
    county: form.county || undefined,
    state: form.state,
    requested_program: form.serviceProgramRequested,
    physician: form.physicianNameLocation,
    diagnosis: form.memberDiagnosis,
    services_needed,
    receives_benefits: form.receivesBenefits,
    benefits_pay_date: form.receivesBenefits === 'Yes' ? form.benefitsReceivedOn : undefined,
    heard_about_us: heard,
    additional_info: form.additionalInfo || undefined,
  };

  const res = await fetch(SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json?.error || `Submission failed (${res.status})`);
  }
  return json as { ok: true; marketer_name: string };
}