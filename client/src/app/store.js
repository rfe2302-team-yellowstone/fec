import { configureStore } from '@reduxjs/toolkit';
import clickTrackerReducer from '../features/click-tracker/clickTrackerSlice';
import moduleTrackerReducer from '../features/module-tracker/moduleTrackerSlice';

export const store = configureStore({
  reducer: {
    clickTracker: clickTrackerReducer,
    moduleTracker: moduleTrackerReducer
  }
})