export const summarize = (str, wordCount = 17) => str
    .trim()
    .replace(/\s+/, ' ')
    .split(' ')
    .splice(0, wordCount)
    .join(' ')
    .concat(' .....');


let cachedToken = null;

export const setToken = function (token) {
  cachedToken = token;
  localStorage.setItem('token', token);
};

export const getToken = () => {
  if (!cachedToken) {
    cachedToken = localStorage.getItem('token');
  }
  return cachedToken;
};

export const isAuthenticated = () => !!getToken();

export const removeToken = () => {
  cachedToken = null;
  localStorage.removeItem('token');
};
