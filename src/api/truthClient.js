const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const truthClient = {
  async call(endpoint, options = {}) {
    const start = performance.now();
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: { 'X-Powered-By': 'Web-Truth', ...options.headers },
      });
      const data = await response.json();
      return {
        data,
        latency: (performance.now() - start).toFixed(2),
        status: response.status
      };
    } catch (err) {
      return { error: err.message, latency: 0 };
    }
  }
};