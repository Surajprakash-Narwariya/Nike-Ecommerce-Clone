import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Test from './Components/Test';
import Home from './Components/Home';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import Shopping from './Components/Shopping';
import ProductDetails from './Components/ProductDetails';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/shopping',
                element: <Shopping />,
            },
            {
                path: '/test',
                element: <Test />,
            },
            {
                path: '/productDetails',
                element: <ProductDetails />,
            },
            {
                path: '/wishlist',
                element: <Wishlist />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

    // </React.StrictMode>
);
