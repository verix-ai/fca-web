import React, { useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { trackInitiateCheckout, trackLead } from '../lib/pixel';

const SUBMIT_LEAD_URL = 'https://fupcxuwfonuajbblwlfd.supabase.co/functions/v1/submit-lead';
const SUPPORT_PHONE = '(478) 973-4831';

type FormFields = {
    full_name: string;
    phone: string;
    email: string;
    zip: string;
    medicaid_number: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const validate = (data: FormFields): FieldErrors => {
    const errors: FieldErrors = {};

    if (!data.full_name.trim()) {
        errors.full_name = 'Full name is required';
    }

    const email = data.email.trim();
    if (!email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Enter a valid email address';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
        errors.phone = 'Phone number is required';
    } else if (phoneDigits.length < 10) {
        errors.phone = 'Enter a valid 10-digit phone number';
    }

    const zipDigits = data.zip.replace(/\D/g, '');
    if (!data.zip.trim()) {
        errors.zip = 'Zipcode is required';
    } else if (zipDigits.length < 5) {
        errors.zip = 'Enter a valid 5-digit zipcode';
    }

    return errors;
};

const EligibilityForm: React.FC = () => {
    const [formData, setFormData] = useState<FormFields>({
        full_name: '',
        phone: '',
        email: '',
        zip: '',
        medicaid_number: '',
    });
    const [errors, setErrors] = useState<FieldErrors>({});
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const hasTrackedFormStart = useRef(false);

    const formatUSPhone = (raw: string): string => {
        const digits = raw.replace(/\D/g, '').slice(0, 10);
        if (digits.length === 0) return '';
        if (digits.length < 4) return `(${digits}`;
        if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    };

    const formatMedicaidNumber = (raw: string): string => {
        const digits = raw.replace(/\D/g, '').slice(0, 12);
        const groups: string[] = [];
        for (let i = 0; i < digits.length; i += 3) {
            groups.push(digits.slice(i, i + 3));
        }
        return groups.join('-');
    };

    const updateField = (field: keyof FormFields) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            if (field === 'phone') {
                value = formatUSPhone(value);
            } else if (field === 'zip') {
                value = value.replace(/\D/g, '').slice(0, 5);
            } else if (field === 'medicaid_number') {
                value = formatMedicaidNumber(value);
            }
            const next = { ...formData, [field]: value };
            setFormData(next);
            if (hasAttemptedSubmit) {
                setErrors(validate(next));
            }
            if (!hasTrackedFormStart.current && value.trim().length > 0) {
                hasTrackedFormStart.current = true;
                trackInitiateCheckout({ content_name: 'Eligibility Check' });
            }
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setHasAttemptedSubmit(true);
        setSubmitError(null);

        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
            const res = await fetch(SUBMIT_LEAD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': anonKey || '',
                    'Authorization': `Bearer ${anonKey || ''}`,
                },
                body: JSON.stringify({
                    full_name: formData.full_name.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),
                    zip: formData.zip.trim(),
                    ...(formData.medicaid_number.trim() && {
                        medicaid_number: formData.medicaid_number.trim(),
                    }),
                }),
            });

            if (res.ok) {
                trackLead({ content_name: 'Eligibility Check' });
                setIsSubmitted(true);
                return;
            }

            if (res.status === 400) {
                const body = await res.json().catch(() => null);
                setSubmitError(body?.error || 'Please check your information and try again.');
                return;
            }

            setSubmitError(`Something went wrong, please try again or call us at ${SUPPORT_PHONE}.`);
        } catch {
            setSubmitError(`Something went wrong, please try again or call us at ${SUPPORT_PHONE}.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full h-14 px-6 rounded-[20px] bg-white border-2 border-[#81c567] focus:border-[#81c567] focus:ring-1 focus:ring-[#81c567] focus:outline-none transition-colors font-medium text-navy placeholder:text-slate-400";
    const labelClass = "text-sm font-bold text-navy uppercase tracking-wider ml-4";
    const errorClass = "text-xs font-medium text-red-600 ml-4 mt-1";

    return (
        <section id="eligibility" className="py-24 px-4 bg-[#f4f2ee]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-black text-navy mb-12 uppercase tracking-tighter">
                    You May Be <br className="md:hidden" /> Eligible!
                </h2>

                {isSubmitted ? (
                    <div className="bg-[#f4f2ee] p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
                        <div className="w-20 h-20 bg-mint/30 rounded-full flex items-center justify-center text-navy mx-auto mb-6">
                            <CheckCircle size={48} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-navy mb-4 tracking-tight">
                            Thanks! We've Got It.
                        </h3>
                        <p className="text-lg text-slate-600 max-w-xl mx-auto">
                            We've received your information and someone from our team will be in touch shortly.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="bg-[#f4f2ee] p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-2 text-left">
                                <label htmlFor="name" className={labelClass}>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.full_name}
                                    onChange={updateField('full_name')}
                                    aria-invalid={!!errors.full_name}
                                    aria-describedby={errors.full_name ? 'name-error' : undefined}
                                    autoComplete="name"
                                    className={inputClass}
                                    placeholder="John Doe"
                                />
                                {errors.full_name && <p id="name-error" className={errorClass}>{errors.full_name}</p>}
                            </div>

                            <div className="space-y-2 text-left">
                                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={updateField('phone')}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                                    inputMode="tel"
                                    autoComplete="tel-national"
                                    maxLength={14}
                                    className={inputClass}
                                    placeholder="(555) 123-4567"
                                />
                                {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
                            </div>

                            <div className="space-y-2 text-left">
                                <label htmlFor="email" className={labelClass}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={updateField('email')}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    autoComplete="email"
                                    className={inputClass}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
                            </div>

                            <div className="space-y-2 text-left">
                                <label htmlFor="zip" className={labelClass}>Client Zipcode</label>
                                <input
                                    type="text"
                                    id="zip"
                                    inputMode="numeric"
                                    autoComplete="postal-code"
                                    maxLength={5}
                                    value={formData.zip}
                                    onChange={updateField('zip')}
                                    aria-invalid={!!errors.zip}
                                    aria-describedby={errors.zip ? 'zip-error' : undefined}
                                    className={inputClass}
                                    placeholder="12345"
                                />
                                {errors.zip && <p id="zip-error" className={errorClass}>{errors.zip}</p>}
                            </div>
                        </div>

                        <div className="space-y-2 text-left mb-8">
                            <label htmlFor="medicaid_number" className={labelClass}>
                                Medicaid Number{' '}
                                <span className="text-slate-400 font-bold normal-case tracking-normal">(optional)</span>
                            </label>
                            <input
                                type="text"
                                id="medicaid_number"
                                inputMode="numeric"
                                maxLength={15}
                                value={formData.medicaid_number}
                                onChange={updateField('medicaid_number')}
                                className={inputClass}
                                placeholder="123-456-789-012"
                            />
                            <p className="text-xs text-slate-500 ml-4 mt-2 font-medium">
                                Optional — but providing it speeds up your eligibility check so our team can confirm coverage faster.
                            </p>
                        </div>

                        {submitError && (
                            <p
                                role="alert"
                                className="text-center text-sm font-medium text-red-600 mb-6"
                            >
                                {submitError}
                            </p>
                        )}

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center bg-mint h-16 pl-10 pr-2 rounded-[24px] hover:brightness-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span className="font-black text-navy text-sm uppercase tracking-[0.2em] mr-6">
                                    {isSubmitting ? 'Submitting…' : 'Check My Eligibility'}
                                </span>
                                <div className="bg-white/20 w-12 h-12 rounded-[20px] flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <ArrowUpRight size={24} className="text-navy" strokeWidth={3} />
                                </div>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EligibilityForm;
