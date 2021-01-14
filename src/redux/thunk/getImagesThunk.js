
const baseUrl = 'https://pixabay.com/api/';
const api_key = '19888943-73e29b7aeafc5e2ada6047ed8';

export const getImagesThunk = (search) => {
    return fetch(`${baseUrl}?key=${api_key}&q=${search } `)
        .then(resp=> resp.json())
        .then(response=> {
            return response
        })
}