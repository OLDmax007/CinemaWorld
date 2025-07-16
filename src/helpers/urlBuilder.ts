export const urlBuilder = (endpoint: string, queryParams?: Record<string, string | number>) => {
    const url = `/${endpoint.replace(/^\//, '')}`;
    if (!queryParams) return url;
    const query = new URLSearchParams(queryParams as Record<string, string>).toString();
    return `${url}?${query}`;
};
