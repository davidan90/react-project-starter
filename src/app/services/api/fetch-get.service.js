import { objectToQueryString } from './utils';

const params = {
    method: 'GET',
};

export const GET = async (endpoint, queryString = {}) => {
    endpoint = `${endpoint}${objectToQueryString(queryString)}`;
    const response = await fetch(endpoint, params);
    return response.json();
}
