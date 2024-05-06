import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
import NavigationStack from './src/navigation';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationStack/>
    </Provider>
  );
}


