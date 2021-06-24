const url = 'https://jsonplaceholder.typicode.com/';

export const dataFetch = async () => {
    const response = await fetch(url + 'users');
    const data = await response.json();
    return data;
}