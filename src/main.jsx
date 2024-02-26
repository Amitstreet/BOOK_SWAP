import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing_page from './Page/Landing_page.jsx'
import Error_Page from './Page/Error_Page.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.jsx'
import Footer from './component/footer';
import Header from './component/header';
import Side_bar from './component/Side_bar';
import Login from './Page/Auth/login.jsx'

const AppLayout = () => {


  const currentState = store.getState();
  console.log(currentState)
    


  return (
    <>
    <Provider store={store}>
     <Header/>
     <Side_bar/>
       <Outlet />  
       <Footer/>
       </Provider>   
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error_Page/>,
    children: [
      {
        path: "/",
        element: <Landing_page />,
      },
     {
      path:"/login",
      element:<Login/>
     }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
