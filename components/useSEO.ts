import { useEffect } from 'react';

const SITE_ORIGIN = 'https://www.friendlycareagency.org';

type SEOOptions = {
    title: string;
    description: string;
    path: string;
};

const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
        el = document.createElement('meta');
        const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) || [];
        if (selector.includes('property=')) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
};

const setCanonical = (href: string) => {
    let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
};

export function useSEO({ title, description, path }: SEOOptions) {
    useEffect(() => {
        const url = `${SITE_ORIGIN}${path}`;

        document.title = title;
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[property="og:title"]', 'content', title);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[name="twitter:title"]', 'content', title);
        setMeta('meta[name="twitter:description"]', 'content', description);
        setCanonical(url);
    }, [title, description, path]);
}
