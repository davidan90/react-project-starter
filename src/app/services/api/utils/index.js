
export const objectToFormData = (params) => {
    const formData = new FormData();
    Object.keys(params)
        .forEach((key) => {
            formData.append(key, params[key]);
        });
    return formData;
}

export const objectToQueryString = (params) => '?' + Object.keys(params)
    .map(param => `${param}=${encodeURIComponent(params[param])}`)
    .join('&');

export const endpointWithId = (endpoint, id) => `${endpoint}/${id}`;

export const errorHandler = (method, msg) => new Error(`API ${method} failed: ${msg}`);