// import { createSlice } from "@reduxjs/toolkit";
// const  formSlice = createSlice({
//     name: "form",
//     initialState : {
//         name: "",
//         email: "",
//         submitted: false
//     },
//     reducers: {
//         updateForm: (state , action) => {
//             state[action.payload.field] = action.payload.value;
//         }
//     }
// });

// export const{updateForm} = formSlice.actions;
// export default formSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
      submitted: false
  },
  reducers: {
    submitForm: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
   
      state.submitted = true;
    }
  }
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
