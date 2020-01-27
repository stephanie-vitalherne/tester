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

const signout = dispatch => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
