import { endpointWithId, errorHandler } from './utils';

const params = {
    method: 'DELETE',
    headers: {
        'Access-Control-Allow-Methods': '*',
    },
};

export const DELETE = async (endpoint, id) => {
    if (id) {
        endpoint = endpointWithId(endpoint, id);
        const response = await fetch(endpoint, params);
        return response.json();
    }
    return errorHandler(params.method, 'undefined id');
}