import { useState, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useApi = <T>() => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const request = useCallback(
    async (
      url: string,
      method: HttpMethod = 'GET',
      body?: any,
      headers?: HeadersInit,
    ) => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url, {
          method,
          body: body ? JSON.stringify(body) : null,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error: any) {
        setState({ data: null, loading: false, error: error.message });
      }
    },
    [],
  );

  return { ...state, request };
};

export default useApi;
