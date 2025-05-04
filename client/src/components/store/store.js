import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../../pages/authslice/index';

const Store  = configureStore({
    reducer : {
        auth: authReducer
    }
})

export default Store;