import type {QueryParamsType} from "@models/QueryParamsType.ts";

export const urlBuilder = (endpoint: string, queryParams?: QueryParamsType) => {
    const url = `/${endpoint.replace(/^\//, '')}`;
    if (!queryParams) return url;
    const query = new URLSearchParams(queryParams as Record<string, string>).toString();
    return `${url}?${query}`;
};
