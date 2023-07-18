import { createSlice } from '@reduxjs/toolkit';

export const clickTrackerSlice = createSlice({
  name: 'clickTracker',
  initialState: {},
  reducers: {
    trackClick: (state, action) => {
      state[action.payload.elementClicked] = {
        clickCount: state[action.payload.elementClicked] ? state[action.payload.elementClicked].clickCount + 1 : 1,
        timeOfClick: action.payload.timeOfClick,
        moduleClicked: action.payload.moduleClicked
      }
    }
  }
});

export const { trackClick } = clickTrackerSlice.actions;
export default clickTrackerSlice.reducer;