import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage: require('../../assets/images/user.png'),
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {updateFirstName, resetToInitialState, logIn, updateToken} = User.actions;

export default User.reducer;
