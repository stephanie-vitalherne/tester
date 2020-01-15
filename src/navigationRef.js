import { NavigationActions } from 'react-navigation';

let navigator;

// function to access navigator
export const setNavigator = nav => {
  navigator = nav;
};

// function for the navigation of other files to use that will trigger the movement
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
