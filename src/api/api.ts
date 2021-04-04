const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  let users;

  try {
    const response = await fetch(API_ENDPOINT);
    users = await response.json();
  } catch(err) {
    console.error(`Error fetching users -> ${err}`);
    return [ undefined, err ];
  }

  return [ users, undefined ];
}