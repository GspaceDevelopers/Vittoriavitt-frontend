import { configureStore } from '@reduxjs/toolkit';

import carrinho from './modules/carrinho/reducer';

const store = configureStore({
    reducer: {
        carrinho
    }
});

export default store;