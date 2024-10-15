import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      component: "",
      props: {},
      styles: {}
}

export const componentSlice = createSlice({
      name: "componentSlice",
      initialState,
      reducers: {
            updateCurrComponent: (state, {payload})=>{
                  // component changed: then prev styles and props of prev component are cleared
                  if (state.component != payload.component){
                        state.styles = {}
                        state.props = {}
                  }
                  state.component = payload.component
            },
            updateStyles: (state, {payload}) =>{
                  state.styles = { ...state.styles , ...payload.styles}
            },
            updateProps: (state,{payload})=>{
                  state.props = {...state.props, ...payload.props}
            }
      }
})


export const { updateCurrComponent, updateStyles, updateProps } = componentSlice.actions
export const componentSliceReducer = componentSlice.reducer