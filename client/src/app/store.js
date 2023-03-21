import { configureStore } from '@reduxjs/toolkit';
import clickTrackerReducer from '../features/click-tracker/clickTrackerSlice';

export const store = configureStore({
  reducer: {
    clickTracker: clickTrackerReducer
  }
})