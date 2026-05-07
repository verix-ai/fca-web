declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
    }
}

type EventParams = Record<string, unknown>;

const fbq = (...args: unknown[]): void => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq(...args);
    }
};

export const trackPageView = (): void => fbq('track', 'PageView');

export const trackLead = (params?: EventParams): void => fbq('track', 'Lead', params);

export const trackContact = (params?: EventParams): void => fbq('track', 'Contact', params);

export const trackInitiateCheckout = (params?: EventParams): void =>
    fbq('track', 'InitiateCheckout', params);

export const trackCustom = (eventName: string, params?: EventParams): void =>
    fbq('trackCustom', eventName, params);
