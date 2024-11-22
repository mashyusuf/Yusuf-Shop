'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import MainLoader from './MainLoader';

function Layout({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        <PersistGate loading={<MainLoader />} persistor={persistor}>{children}</PersistGate>
    </Provider>;
}

export default Layout;
