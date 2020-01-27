import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'login':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

// Clears the error message when switching screens
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
  // make api request to sign up with email and password
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'login', payload: response.data.token });

    // navigate to main flow of app
    navigate('TrackList');
  } catch (err) {
    // if sign up fails, show error message
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signing up'
    });
  }
};

// Setting up auto login
const tryLocalLogin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'login', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const login = dispatch => async ({ email, password }) => {
  // try to login
  try {
    const response = await trackerApi.post('/login', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'login', payload: response.data.token });

    // navigate to main flow of app
    navigate('TrackList');
  } catch (err) {
    // if login fails, show error message
    console.log(err);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with logging in'
    });
  }
};

const signout = dispatch => async () => {
  // sign out
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Login');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, signout, clearErrorMessage, tryLocalLogin },
  { token: null, errorMessage: '' }
);
