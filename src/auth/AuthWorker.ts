const VALID_USERNAME = 'eggpal';
const VALID_PASSWORD = 'eggpal@101';

export function validateCredentials(username: string, password: string) {
  return username.trim() === VALID_USERNAME && password === VALID_PASSWORD;
}
