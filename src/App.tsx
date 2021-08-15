import  React  from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListeningOnRoute from './routes';

function App() {
  return (
  <Provider store={store}>
     <ListeningOnRoute />
  </Provider>      
  );
}

export default App;
