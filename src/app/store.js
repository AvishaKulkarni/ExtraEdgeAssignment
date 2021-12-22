import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../app/features/userSlice";


export default configureStore ({
    reducer: {
       user: userReducer,
    },
});