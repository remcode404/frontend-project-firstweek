import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuWindow: false
}

const MainMenuSlice = createSlice({
name: "MainMenu",
initialState,
reducers: {
setMenuWindow(state, action) {
state.menuWindow = true
console.log(setMenuWindow)
}
},
})



export const { setMenuWindow } = MainMenuSlice.actions

export  default MainMenuSlice.reducer