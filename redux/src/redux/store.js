            //counter.jsx
            //Routing
//   import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from  "../features/counterSlice";
//   export const store = configureStore({
//      reducer: {
//          counter:counterReducer,
//      },
//  });

// //todoList question
import { configureStore }  from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})
        //form redux
        // import { configureStore
        //  } from "@reduxjs/toolkit";
        //  import formReducer from "./formSlice";
        //  export const store = configureStore({
        //     reducer: {
        //         form: formReducer
        //     }
        //  });

// import { configureStore } from "@reduxjs/toolkit";  
// import cartReducer  from "../features/CartSlice";
// export  const store =  configureStore({
//     reducer: {
//     cart: cartReducer
//     }
// })
// export default store;