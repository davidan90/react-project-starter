const params = {
    method: 'POST',
};

export const POST = async (endpoint, data = {}) => {
    const data = await fetch(endpoint, params);
    return data.json();
}
