import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FavoriteContextProvider } from './store/favorite-context';

ReactDOM.render(<FavoriteContextProvider>
                  <App />
                </FavoriteContextProvider>, 
                document.getElementById('root'));
  
