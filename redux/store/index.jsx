import messageSlice from '../slice/message'
import {configureStore} from "@reduxjs/toolkit";
export default configureStore({
    reducer: {
        messageSlice: messageSlice
    }
})