import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { store } from './src/store/configureStore';
import NavigationStack from './src/navigation';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationStack/>
      <FlashMessage position="top" /> 
    </Provider>
  );
}


