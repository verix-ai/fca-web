import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, ArrowRight, ArrowLeft, CheckCircle2, Building, User, HeartPulse, FileText } from 'lucide-react';

const InputWrapper = ({ label, required = false, children }: { label: string, required?: boolean, children: React.ReactNode }) => (
    <div className="space-y-2">
        <label className="text-sm font-bold text-navy uppercase tracking-wider flex items-center">
            {label} {required && <span className="text-mint ml-1 text-lg leading-none">*</span>}
        </label>
        {children}
    </div>
);

const BaseInput = ({ name, type = 'text', placeholder, required = false, value, onChange, disabled = false, maxLength }: any) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
        placeholder={placeholder}
    />
);

const BaseSelect = ({ name, required = false, value, onChange, options, placeholder }: any) => (
    <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy cursor-pointer appearance-none"
    >
        <option value="" disabled hidden>{placeholder || "Select option"}</option>
        {options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
        ))}
    </select>
);

const RadioGroup = ({ name, options, value, onChange, required = false }: any) => (
    <div className="flex flex-wrap gap-4 mt-2">
        {options.map((opt: string) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${value === opt ? 'border-mint' : 'border-slate-300 group-hover:border-mint'}`}>
                    {value === opt && <div className="w-3 h-3 rounded-full bg-mint" />}
                </div>
                <input
                    type="radio"
                    name={name}
                    value={opt}
                    checked={value === opt}
                    onChange={onChange}
                    required={required}
                    className="hidden"
                />
                <span className="font-medium text-navy">{opt}</span>
            </label>
        ))}
    </div>
);

const Checkbox = ({ name, label, checked, onChange }: any) => (
    <label className="flex items-center gap-3 cursor-pointer group p-2 -ml-2 rounded-xl hover:bg-slate-50 transition-colors">
        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${checked ? 'bg-mint border-mint' : 'border-slate-300 group-hover:border-mint/50 bg-white'}`}>
            {checked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
        </div>
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <span className="font-medium text-navy">{label}</span>
    </label>
);

const ReferralFormPage: React.FC = () => {
    const { employeeSlug } = useParams();

    // Current wizard step (1 to 4)
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form Data State
    const [formData, setFormData] = useState({
        // Step 1: Intake & Referral Information / Referral & Caregiver Details
        marketerName: employeeSlug ? employeeSlug.replace(/-/g, ' ') : '',
        serviceProgramRequested: '',
        referralName: '',
        sex: '',
        referralDOB: '',
        gaMedicaidOrSSN: '',
        phone: '',
        caregiverName: '',
        caregiverRelationship: '',
        caregiverPhone: '',

        // Step 2: Location & Living Situation
        streetAddress: '',
        aptSuite: '',
        city: '',
        zipCode: '',
        county: '',
        state: '',
        caregiverLivesInHome: '',

        // Step 3: Benefits & Services
        receivesBenefits: '',
        benefitsReceivedOn: '', // 1st or 3rd
        physicianNameLocation: '',
        memberDiagnosis: '',
        // Services checkboxes
        servicesRequested: {
            ambulatingTransferring: false,
            bathing: false,
            dressing: false,
            feeding: false,
            hygieneGrooming: false,
            basicHousekeeping: false,
            errandAssistance: false,
            emergencyResponse: false,
            suppliesRequired: false,
        },

        // Step 4: Referral Source & Additional Info
        hearAboutUs: '',
        otherSource: '', // Text input if "Other" is selected
        additionalInfo: ''
    });

    const steps = [
        { num: 1, title: 'Intake & Referral Info', icon: <User size={20} /> },
        { num: 2, title: 'Location & Living', icon: <Building size={20} /> },
        { num: 3, title: 'Benefits & Services', icon: <HeartPulse size={20} /> },
        { num: 4, title: 'Referral Source', icon: <FileText size={20} /> }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                servicesRequested: {
                    ...prev.servicesRequested,
                    [name]: checked
                }
            }));
        } else {
            let newValue = value;

            // Format phone numbers
            if (name === 'phone' || name === 'caregiverPhone') {
                const cleaned = value.replace(/\D/g, '');
                if (cleaned.length < 4) newValue = cleaned;
                else if (cleaned.length < 7) newValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
                else newValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
            }
            // Format SSN / Medicaid
            else if (name === 'gaMedicaidOrSSN') {
                const cleaned = value.replace(/\D/g, '');
                if (cleaned.length < 4) newValue = cleaned;
                else if (cleaned.length < 6) newValue = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
                else newValue = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;
            }

            setFormData(prev => ({
                ...prev,
                [name]: newValue
            }));
        }
    };

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Final Form Data Submitted:', formData);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- Steps Content ---
    const renderStep1 = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h3 className="text-2xl font-black text-navy mb-2">Intake & Referral Information</h3>
                <p className="text-slate-500">Please provide the initial request details.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <InputWrapper label="Marketer Name">
                    <BaseInput name="marketerName" value={formData.marketerName} onChange={handleChange} disabled={!!employeeSlug} placeholder="Marketer's Name" />
                </InputWrapper>
                <InputWrapper label="Service/Program Requested" required>
                    <BaseSelect
                        name="serviceProgramRequested"
                        value={formData.serviceProgramRequested}
                        onChange={handleChange}
                        required
                        options={['CCSP', 'GAPP', 'ICWP', 'SFC', 'SOURCE', 'Not Sure']}
                        placeholder="Select Program"
                    />
                </InputWrapper>
            </div>

            <div className="pt-6 border-t border-slate-100">
                <h3 className="text-2xl font-black text-navy mb-2">Referral & Caregiver Details</h3>
                <p className="text-slate-500 mb-6">Information about the client and their primary caregiver.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <InputWrapper label="Referral Name" required>
                        <BaseInput name="referralName" value={formData.referralName} onChange={handleChange} required placeholder="Client's Full Name" />
                    </InputWrapper>
                    <InputWrapper label="Sex" required>
                        <BaseSelect name="sex" value={formData.sex} onChange={handleChange} required options={['Male', 'Female']} placeholder="Select Sex" />
                    </InputWrapper>
                    <InputWrapper label="Referral DOB" required>
                        <BaseInput type="date" name="referralDOB" value={formData.referralDOB} onChange={handleChange} required />
                    </InputWrapper>
                    <InputWrapper label="GA Medicaid or SS#" required>
                        <BaseInput name="gaMedicaidOrSSN" value={formData.gaMedicaidOrSSN} onChange={handleChange} required placeholder="--- -- ----" maxLength={11} />
                    </InputWrapper>
                    <InputWrapper label="Phone #" required>
                        <BaseInput type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(###) ###-####" maxLength={14} />
                    </InputWrapper>
                    {/* Empty div for grid alignment if needed, or spans 2 */}
                    <div className="hidden md:block"></div>

                    <InputWrapper label="Caregiver's Name" required>
                        <BaseInput name="caregiverName" value={formData.caregiverName} onChange={handleChange} required placeholder="Caregiver's Full Name" />
                    </InputWrapper>
                    <InputWrapper label="Caregiver's Relationship To Client" required>
                        <BaseSelect
                            name="caregiverRelationship"
                            value={formData.caregiverRelationship}
                            onChange={handleChange}
                            required
                            options={[
                                'Mother', 'Father', 'Daughter', 'Son', 'Sister', 'Brother',
                                'Cousin', 'Grandchild', 'In-Law', 'Step-Parent', 'Step-Sibling',
                                'Friend', 'Partner', 'Grandparent', 'Niece', 'Nephew'
                            ]}
                            placeholder="Select Relationship"
                        />
                    </InputWrapper>
                    <InputWrapper label="Caregiver's Phone #" required>
                        <BaseInput type="tel" name="caregiverPhone" value={formData.caregiverPhone} onChange={handleChange} required placeholder="(###) ###-####" maxLength={14} />
                    </InputWrapper>
                </div>
                <div className="mt-6">
                    <InputWrapper label="Does your Caregiver live in the home?" required>
                        <RadioGroup name="caregiverLivesInHome" options={['Yes', 'No']} value={formData.caregiverLivesInHome} onChange={handleChange} required />
                    </InputWrapper>
                </div>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h3 className="text-2xl font-black text-navy mb-2">Location & Living Situation</h3>
                <p className="text-slate-500">Where does the client currently reside?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <InputWrapper label="Street Address" required>
                    <BaseInput name="streetAddress" value={formData.streetAddress} onChange={handleChange} required placeholder="123 Main St" />
                </InputWrapper>
                <InputWrapper label="Apt, Suite, etc.">
                    <BaseInput name="aptSuite" value={formData.aptSuite} onChange={handleChange} placeholder="Apt 4B" />
                </InputWrapper>
                <InputWrapper label="City" required>
                    <BaseInput name="city" value={formData.city} onChange={handleChange} required placeholder="Atlanta" />
                </InputWrapper>
                <InputWrapper label="ZIP Code" required>
                    <BaseInput name="zipCode" value={formData.zipCode} onChange={handleChange} required placeholder="30303" />
                </InputWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputWrapper label="County">
                        <BaseInput name="county" value={formData.county} onChange={handleChange} placeholder="Fulton" />
                    </InputWrapper>
                    <InputWrapper label="State" required>
                        <BaseSelect
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            options={[
                                'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                                'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
                                'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                                'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                                'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
                            ]}
                            placeholder="Select State"
                        />
                    </InputWrapper>
                </div>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h3 className="text-2xl font-black text-navy mb-2">Benefits & Services</h3>
                <p className="text-slate-500">Medical information and assistance required.</p>
            </div>

            <div className="grid gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <InputWrapper label="Do you receive Social Security or Disability Benefits?" required>
                    <RadioGroup name="receivesBenefits" options={['Yes', 'No']} value={formData.receivesBenefits} onChange={handleChange} required />
                </InputWrapper>

                {formData.receivesBenefits === 'Yes' && (
                    <div className="animate-in fade-in slide-in-from-top-2">
                        <InputWrapper label="Received on the 1st or 3rd?">
                            <RadioGroup name="benefitsReceivedOn" options={['1st', '3rd']} value={formData.benefitsReceivedOn} onChange={handleChange} />
                        </InputWrapper>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <InputWrapper label="Physician's Full Name & Location" required>
                    <BaseInput name="physicianNameLocation" value={formData.physicianNameLocation} onChange={handleChange} required placeholder="Dr. Smith, Grady Memorial" />
                </InputWrapper>
                <InputWrapper label="Member's Diagnosis/Disability" required>
                    <BaseInput name="memberDiagnosis" value={formData.memberDiagnosis} onChange={handleChange} required placeholder="List primary diagnoses" />
                </InputWrapper>
            </div>

            <div className="pt-4 border-t border-slate-100">
                <InputWrapper label="Services Needed/Requested">
                    <p className="text-sm text-slate-500 font-normal mb-4">Select all that apply to the client's needs.</p>
                    <div className="grid sm:grid-cols-2 gap-y-2 gap-x-8">
                        <Checkbox name="ambulatingTransferring" label="Ambulating/Transferring" checked={formData.servicesRequested.ambulatingTransferring} onChange={handleChange} />
                        <Checkbox name="bathing" label="Bathing" checked={formData.servicesRequested.bathing} onChange={handleChange} />
                        <Checkbox name="dressing" label="Dressing" checked={formData.servicesRequested.dressing} onChange={handleChange} />
                        <Checkbox name="feeding" label="Feeding" checked={formData.servicesRequested.feeding} onChange={handleChange} />
                        <Checkbox name="hygieneGrooming" label="Hygiene/Grooming" checked={formData.servicesRequested.hygieneGrooming} onChange={handleChange} />
                        <Checkbox name="basicHousekeeping" label="Basic Housekeeping" checked={formData.servicesRequested.basicHousekeeping} onChange={handleChange} />
                        <Checkbox name="errandAssistance" label="Errand Assistance" checked={formData.servicesRequested.errandAssistance} onChange={handleChange} />
                        <Checkbox name="emergencyResponse" label="Emergency Response/Alert System or Device" checked={formData.servicesRequested.emergencyResponse} onChange={handleChange} />
                        <Checkbox name="suppliesRequired" label="Do you require supplies to accommodate your individual needs?" checked={formData.servicesRequested.suppliesRequired} onChange={handleChange} />
                    </div>
                </InputWrapper>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h3 className="text-2xl font-black text-navy mb-2">Referral Source & Additional Info</h3>
                <p className="text-slate-500">Just a few final details before submitting.</p>
            </div>

            <InputWrapper label="How did you hear about us?" required>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {['Physician Referral', 'Signage in my Community', 'Family or Friend', 'Word of Mouth', 'Brochure or Handout from Resource Partners', 'Social Media', 'Other (specify)'].map(opt => (
                        <label key={opt} className="flex items-start gap-4 cursor-pointer group p-4 border border-slate-200 rounded-2xl hover:border-mint hover:bg-mint/5 transition-all">
                            <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.hearAboutUs === opt ? 'border-mint' : 'border-slate-300'}`}>
                                {formData.hearAboutUs === opt && <div className="w-3 h-3 rounded-full bg-mint" />}
                            </div>
                            <input type="radio" name="hearAboutUs" value={opt} checked={formData.hearAboutUs === opt} onChange={handleChange} required className="hidden" />
                            <span className="font-medium text-navy">{opt}</span>
                        </label>
                    ))}
                </div>
            </InputWrapper>

            {formData.hearAboutUs === 'Other (specify)' && (
                <div className="animate-in fade-in slide-in-from-top-2 pl-4 border-l-4 border-mint ml-2">
                    <InputWrapper label="Please specify" required>
                        <BaseInput name="otherSource" value={formData.otherSource} onChange={handleChange} required placeholder="Where did you hear about us?" />
                    </InputWrapper>
                </div>
            )}

            <div className="pt-4">
                <InputWrapper label="Any additional information (Email, etc.)?">
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400 resize-none"
                        placeholder="Add any extra details we should know..."
                    ></textarea>
                </InputWrapper>
            </div>
        </div>
    );

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-navy text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <FileText size={14} className="text-mint" />
                        <span>Referral Capture</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        REFERRAL FORM
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Log referral details, requested services, and caregiver contacts to kick off the onboarding workflow.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100">

                    {isSubmitted ? (
                        <div className="text-center py-20 px-4 animate-in zoom-in-95 duration-500">
                            <div className="w-24 h-24 bg-mint/20 rounded-full flex items-center justify-center text-mint mx-auto mb-8">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-4xl font-black text-navy mb-4">Submission Successful!</h2>
                            <p className="text-xl text-slate-500 max-w-lg mx-auto mb-10">
                                Thank you for submitting the referral. The information has been securely logged and our team will review it shortly.
                            </p>
                            <button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setCurrentStep(1);
                                    // Normally you would also reset form data here
                                }}
                                className="px-8 py-4 bg-navy text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-mint hover:text-navy transition-all"
                            >
                                Submit Another Referral
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Step Progress indicators */}
                            <div className="flex justify-between items-center mb-12 relative">
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2 rounded-full"></div>
                                <div
                                    className="absolute top-1/2 left-0 h-1 bg-mint -z-10 -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                                ></div>

                                {steps.map((step) => {
                                    const isActive = currentStep === step.num;
                                    const isPast = currentStep > step.num;

                                    return (
                                        <div key={step.num} className="flex flex-col items-center gap-3">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black transition-all duration-300 ${isActive ? 'bg-mint text-navy shadow-lg shadow-mint/30 scale-110' : isPast ? 'bg-navy text-white' : 'bg-slate-100 text-slate-400 border-2 border-white'}`}>
                                                {isPast ? <CheckCircle2 size={24} /> : step.icon}
                                            </div>
                                            <span className={`text-xs font-bold uppercase tracking-wider hidden md:block max-w-[100px] text-center ${isActive ? 'text-navy' : 'text-slate-400'}`}>
                                                {step.title}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            <form onSubmit={(e) => { e.preventDefault(); if (currentStep === 4) handleSubmit(e); else handleNext(); }}>

                                {currentStep === 1 && renderStep1()}
                                {currentStep === 2 && renderStep2()}
                                {currentStep === 3 && renderStep3()}
                                {currentStep === 4 && renderStep4()}

                                {/* Action Buttons */}
                                <div className={`flex items-center pt-10 mt-10 border-t border-slate-100 ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
                                    {currentStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="px-8 py-4 bg-slate-100 text-navy rounded-full font-bold uppercase tracking-wider text-sm hover:bg-slate-200 transition-all flex items-center gap-2"
                                        >
                                            <ArrowLeft size={18} />
                                            <span>Back</span>
                                        </button>
                                    )}

                                    {currentStep < 4 ? (
                                        <button
                                            type="submit" // Trigger HTML5 form validation before next step
                                            className="px-10 py-4 bg-navy text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-mint hover:text-navy transition-all flex items-center gap-2 shadow-lg shadow-navy/20"
                                        >
                                            <span>Next Step</span>
                                            <ArrowRight size={18} />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-10 py-4 bg-mint text-navy rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-navy hover:text-white transition-all flex items-center gap-3 shadow-lg shadow-mint/30"
                                        >
                                            <span>Submit Referral</span>
                                            <Send size={18} />
                                        </button>
                                    )}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReferralFormPage;
