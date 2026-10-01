import type { ListingItem, DetailItem } from "../types";

function formatDate(dateValue: string | Date | undefined): string | undefined {
    if (!dateValue) return undefined;
    if (typeof dateValue === 'string' && /^\d{4}$/.test(dateValue.trim())) return dateValue.trim();
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (isNaN(date.getTime())) return undefined;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
}

export function getListingItem(entry: any, collection?: string): ListingItem {
    const d = entry.data;
    
    return {
        title: d.title,
        description: d.description,
        date: formatDate(d.date),
        authors: d.author,
        extraInput: d.journal || d.event || d.institution,
        tags: d.tags || [],
        externalUrl: d.external_url,
        image: d.image,
    };
}

export function getDetailItem(entry: any, collection: string): DetailItem {
    const listing = getListingItem(entry, collection);
    
    return {
        ...listing,
        backHref: collection === 'posts' ? '/posts' : `/${collection}`,
    };
}