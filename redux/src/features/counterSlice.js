import { createSlice } from "@reduxjs/toolkit";

  const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value:0,
    },
        reducers: {
        increment:(state)=> {
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1
        },
    },
    });
    export const{increment , decrement} = counterSlice.actions;
    export default counterSlice.reducer;


//         IncreaseByAmount: (state,actions) => {
//             state.value += actions.payload
//         },
//         DecreaseByAmount:(state,actions) => {
//             state.value -=actions.payload
//         },
//   IncreamentByAmount: (state,actions) => {
//             state.value += actions.payload
//         },
//         DecreaseByAmount:(state,actions) => {
//             state.value -=actions.payload
//         }
//     }
//  });
//  export const {increment , decrement, IncreamentByAmount,DecreamentByAmount} = counterSlice.actions;

//  export default counterSlice.reducer;