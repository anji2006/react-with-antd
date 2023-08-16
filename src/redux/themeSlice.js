import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    changeTheme: (state, action) => (action.payload ? 'dark' : 'light'),

    // {
    //   console.log('##### redux slice Theme', state, action);
    //   return 'dark';
    // },
  },
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
