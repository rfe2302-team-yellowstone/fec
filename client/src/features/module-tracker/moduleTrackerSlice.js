import { createSlice } from '@reduxjs/toolkit';

export const moduleTrackerSlice = createSlice({
  name: 'moduleTracker',
  initialState: '',
  reducers: {
    trackModule: (state, action) => {
      return action.payload
    }
  }
})

export const { trackModule } = moduleTrackerSlice.actions;
export default moduleTrackerSlice.reducer;