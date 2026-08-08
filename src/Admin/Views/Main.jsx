import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <-- Poore project ka main App component connect kiya
import { BrowserRouter } from 'react-router-dom'; // <-- Website par saare routes chalane ke liye zaroori hai
import { Provider } from 'react-redux'; // <-- Redux store ko poore project se jodne ke liye
import { store } from './Redux/Store.js'; // <-- Aapka Redux Store path (apne project ke hisab se check kar lein)
import './index.css'; // <-- Global styling/CSS file

// 🚀 Vite/React ka main structural landing point jo HTML ke 'root' div ko connect karta hai
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 📦 Provider: Isse poori website me Redux ka data chalne lagega */}
    <Provider store={store}>
      {/* 🧭 BrowserRouter: Iske bina router-dom ke links aur URLs kaam nahi karenge */}
      <BrowserRouter>
        {/* 🏠 App: Hamara main application component jahan saare routers jude hain */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
