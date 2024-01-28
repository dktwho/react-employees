import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Paths} from "./paths";
import {Register} from "./pages/register/register";
import {Login} from "./pages/login/login";

import {ConfigProvider, theme} from "antd";

import reportWebVitals from './reportWebVitals';

import './index.css';
import Auth from "./features/auth/auth";
import {Employees} from "./pages/employees/employees";
import {AddEmployee} from "./pages/addEmployee/AddEmployee";


const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Employees/>
    },
    {
        path: Paths.login,
        element: <Login/>
    },
    {
        path: Paths.register,
        element: <Register/>
    },
    {
        path: Paths.employeeAdd,
        element: <AddEmployee/>
    },
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{
                algorithm: theme.darkAlgorithm
            }}>
                <Auth>
                    <RouterProvider router={router}/>
                </Auth>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
