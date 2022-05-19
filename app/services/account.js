import axios from 'axios';

// example of fetching user's todos via json placeholder api
export async function fetchMeta() {
  const response = await axios
    .get('https://jsonplaceholder.typicode.com/users/1/todos')
    .catch(error => {
      throw new Error(error);
    });
  return response;
}

export async function fetchMeta2() {
  const response = await axios
    .get('https://jsonplaceholder.typicode.com/users/1/todos')
    .catch(error => {
      throw new Error(error);
    });
  return response;
}
