import { endpointWithId, objectToFormData, errorHandler } from './utils';

const params = {
    method: 'PATCH',
    headers: {
        'Access-Control-Allow-Methods': '*',
    },
};

export const PATCH = async (endpoint, id, data = {}) => {
    if (id) {
        endpoint = endpointWithId(endpoint, id);
        params.body = objectToFormData(data);
        const response = await fetch(endpoint, params);
        return response.json();
    }
    return errorHandler(params.method, 'undefined id');
}