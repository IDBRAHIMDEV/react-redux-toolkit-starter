import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const couterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            if(state.count) {
                state.count -= action.payload
            }
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, reset } = couterSlice.actions

export default couterSlice.reducer