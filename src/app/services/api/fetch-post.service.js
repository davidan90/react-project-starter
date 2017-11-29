const params = {
    method: 'POST',
};

export const POST = async (endpoint, data = {}) => {
    const response = await fetch(endpoint, params);
    return response.json();
}
