import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {store} from './Store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
