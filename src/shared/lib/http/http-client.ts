import { TypedResponse } from "./typed-response";

export type FetchOptions = Omit<RequestInit, "method" | "body">;

export interface HttpClientConfig {
  baseUrl: string;
  params?: Record<string, string>; // for default query params (e.g., API key)
  headers?: Record<string, string>; // for default headers (e.g., Content-Type)
}

export class HttpClient {
  private baseUrl: string;
  private params: Record<string, string> = {};
  private headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  constructor(config: HttpClientConfig) {
    this.baseUrl = config.baseUrl;
    this.params = config.params || {};
    this.headers = config.headers || this.headers;
  }

  private async request<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: unknown,
    options?: FetchOptions
  ): Promise<TypedResponse<T>> {
    // Combine query parameters
    const fullUrl = new URL(`${this.baseUrl}${url}`);

    fullUrl.search = new URLSearchParams(this.params).toString();

    // Fetch request with default headers and body handling
    const res = await fetch(fullUrl, {
      method,
      headers: {
        ...this.headers,
        ...(options?.headers || {}),
      },
      ...options,
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    }

    return new TypedResponse<T>(res);
  }

  get<T = unknown>(
    url: string,
    options?: FetchOptions
  ): Promise<TypedResponse<T>> {
    return this.request<T>(url, "GET", undefined, options);
  }

  post<T = unknown>(
    url: string,
    data?: unknown,
    options?: FetchOptions
  ): Promise<TypedResponse<T>> {
    return this.request<T>(url, "POST", data, options);
  }

  put<T = unknown>(
    url: string,
    data?: unknown,
    options?: FetchOptions
  ): Promise<TypedResponse<T>> {
    return this.request<T>(url, "PUT", data, options);
  }

  delete<T = unknown>(
    url: string,
    options?: FetchOptions
  ): Promise<TypedResponse<T>> {
    return this.request<T>(url, "DELETE", undefined, options);
  }
}
