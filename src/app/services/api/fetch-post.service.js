import { objectToFormData } from './utils';

const params = {
    method: 'POST',
};

export const POST = async (endpoint, data = {}) => {
    params.body = objectToFormData(data);
    const response = await fetch(endpoint, params);
    return response.json();
}
