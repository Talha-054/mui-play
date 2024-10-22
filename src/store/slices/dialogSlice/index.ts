import { createSlice } from "@reduxjs/toolkit";

interface ToggleDialogAction {
  type: string;
  payload: {
    name: string;
    visible: boolean;
  };
}

interface dialogSliceInitialState {
  [key: string]: boolean;
  paletteForm: boolean;
  chatDialog: boolean
  
}
const initialState: dialogSliceInitialState = {
  paletteForm: false,
  chatDialog: false
};
const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    toggleDialog(state: dialogSliceInitialState, action: ToggleDialogAction) {
      state[action.payload.name] = action.payload.visible;
    },
  },
});

export const { toggleDialog } = dialogSlice.actions;

const dialogReducer = dialogSlice.reducer;

export default dialogReducer;
