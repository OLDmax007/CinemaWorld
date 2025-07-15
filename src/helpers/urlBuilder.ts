export const urlBuilder = (base: string, endpoint: string, queryParams?: Record<string, string | number>) => {
    const url = `${base.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    if (!queryParams) return url;
    const query = new URLSearchParams(queryParams as Record<string, string>).toString();
    return `${url}?${query}`;
};
