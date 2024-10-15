import { createSlice } from "@reduxjs/toolkit";

interface Palette {
      [key:string] : any,
      mode: "light" | "dark" | string; 
      common: {
          black: string;
          white: string;
      } | string;
      primary: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      } | string;
      secondary: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      } | string;
      error: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      } | string;
      warning: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      } | string;
      info: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      } | string;
      success: {
          main: string;
          light: string;
          dark: string;
          contrastText: string;
      };
  }

interface initialStateType {
      palette: Palette
}

const initialState: initialStateType = {
      palette: {
     
            mode: "light",
            common: {
                  black: "#000",
                  white: "#fff"
            },
            primary: {
                  main: "#1976d2",
                  light: "#42a5f5",
                  dark: "#1565c0",
                  contrastText: "#fff"
            },
            secondary: {
                  main: "#9c27b0",
                  light: "#ba68c8",
                  dark: "#7b1fa2",
                  contrastText:" #fff"
            },
            error: {
                  main: "#d32f2f",
                  light: "#ef5350",
                  dark: "#c62828",
                  contrastText:" #fff"
            },
            warning: {
                  main: "#ed6c02",
                  light: "#ff9800",
                  dark: "#e65100",
                  contrastText: "#fff"
            },
            info: {
                  main: "#0288d1",
                  light:" #03a9f4",
                  dark: "#01579b",
                  contrastText: "#fff"
            },
            success: {
                  main: "#2e7d32",
                  light: "#4caf50",
                  dark: "#1b5e20",
                  contrastText: "#fff"
            },
            text : {
                  primary: "rgba(0, 0, 0, 0.87)",
                  secondary: "rgba(0, 0, 0, 0.6)",
                  disabled: "rgba(0, 0, 0, 0.38)"
            },
            divider : "rgba(0, 0, 0, 0.12)",
            background: {
                  paper: "#fff",
                  default: "#fff"
            },
            action : {
                  active: "rgba(0, 0, 0, 0.54)",
                  hover: "rgba(0, 0, 0, 0.04)",
                  hoverOpacity: 0.04,
                  selected: "rgba(0, 0, 0, 0.08)",
                  selectedOpacity: 0.08,
                  disabled: "rgba(0, 0, 0, 0.26)",
                  disabledBackground: "rgba(0, 0, 0, 0.12)",
                  disabledOpacity: 0.38,
                  focus: "rgba(0, 0, 0, 0.12)",
                  focusOpacity: 0.12,
                  activatedOpacity: 0.12
            }   
      }
}


export const themeSlice = createSlice({
      name: "themeSlice",
      initialState,
      reducers: {
            updatePalette: (state, {payload})=>{
                  state.palette[payload.property][payload.subProperty] = payload.value
                  if (payload.light || payload.dark){
                        state.palette[payload.property].light = payload.light
                        state.palette[payload.property].dark = payload.dark 
                  }    
            },
            resetPalette: (state)=>{
                  console.log("clearing palette")
                  console.log(initialState)
                  state.palette = initialState.palette
            }
      }
})

export const {updatePalette, resetPalette} = themeSlice.actions

export const themeReducer = themeSlice.reducer