import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
    // if signed up, modify the state and say that user is authenticated
    // if sign up fails, show error message
  };
};

const login = dispatch => {
  return ({ email, password }) => {
    // try to login
    // if logged in, modify the state
    // if login fails, show error message
  };
};

const signout = dispatch => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, signout },
  { isSignedIn: false }
);
