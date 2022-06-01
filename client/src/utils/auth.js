import decode from 'jwt-decode';

// creating a new JavaScript class called AuthService that we instantiate a new version of for every component that imports it
class AuthService {
    // retrieve data saved in token
    getProfile() {
      return decode(this.getToken());
    }
  
    // check if the user is still logged in
    loggedIn() {
      // Checks if there is a saved token and it's still valid
      const token = this.getToken();
      // use type coersion to check if token is NOT undefined and the token is NOT expired
      return !!token && !this.isTokenExpired(token);
    }
    //  if we call the .loggedIn() method from a component, we'll get a simple true or false in return, but the functionality itself will rely on other methods to get to that response
  
    // check if the token has expired
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // retrieve token from localStorage
    getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token');
    }
  
    // set token to localStorage and reload page to homepage
    login(idToken) {
      // Saves user token to localStorage
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
    }
    // If we call .login(), we'll accept the token, set it to localStorage, and refresh the app.
  
    // clear token from localStorage and force logout with reload
    logout() {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
      // this will reload the page and reset the state of the application
      window.location.assign('/');
    }
}

export default new AuthService();
