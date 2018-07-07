/**
 * Performs a request with any query string.
 * @param {string} query The query string.
 * @param {object} [variables] Object of variables. Keys much match variables in the query string.
 * @returns Promise containing the data.
 */
export const fetchQuery = async (
  query: string,
  variables: Object
): Promise<Object> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  };
  const url =
    process.env.NODE_ENV === 'test'
      ? 'http://localhost:3001/api/graphql'
      : '/api/graphql';
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

/**
 * Logs in user.
 * @param {object} credentials Credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns Promise containing user id.
 */
export const logIn = async (credentials: Object): Promise<Object> => {
  const query = `query LogIn($input:LogInInput!){logIn(input:$input)}`;
  return fetchQuery(query, { input: credentials });
};
