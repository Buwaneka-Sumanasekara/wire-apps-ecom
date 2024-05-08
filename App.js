import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { PersistGate } from 'redux-persist/integration/react';

import { store,persistor } from './src/store/configureStore';
import NavigationStack from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}


