import '@/styles/globals.css';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import bookmarks from '@/reducers/bookmarks';
import user from '@/reducers/user';
import hiddenArticles from '@/reducers/hiddenArticles';

const reducers = combineReducers({ bookmarks, user, hiddenArticles });

const persistConfig = { key: 'my-news-24256271', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}