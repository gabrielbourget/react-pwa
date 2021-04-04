const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  let users;

  try {
    const response = await fetch(API_ENDPOINT);
    users = await response.json();
  } catch(err) {
    throw new Error(`Error fetching users -> ${err}`);
  }

  return users;
}