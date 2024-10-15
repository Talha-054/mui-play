import { configureStore } from '@reduxjs/toolkit'
import { componentSliceReducer } from './slices/componentSlice'
import dialogReducer from './slices/dialogSlice';
import { themeReducer } from './slices/themeSlice';


export const store = configureStore({
      reducer : {
            componentSlice: componentSliceReducer,
            dialogSlice: dialogReducer,
            themeSlice: themeReducer 
            
      }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;