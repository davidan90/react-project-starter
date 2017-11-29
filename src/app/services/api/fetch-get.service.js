const params = {
    method: 'GET',
};

const objectToQueryString = (params) => '?' + Object.keys(params)
    .map(param => `${param}=${encodeURIComponent(params[param])}`)
    .join('&');

export const GET = async (endpoint, queryString = {}) => {
    endpoint = `${endpoint}${objectToQueryString(queryString)}`;
    const response = await fetch(endpoint, params);
    return response.json();
}
