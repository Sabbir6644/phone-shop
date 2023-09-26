import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './Components/LoginForm.jsx';
import Home from './Components/Home';
import PhonesCollection from './Components/PhonesCollection';
import PhoneDetails from './Components/PhoneDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/Home",
    element: <Home></Home>,
    loader: ()=> fetch('Phone.json'),
    children:[
      {
      path: "/Home",
      element: <PhonesCollection></PhonesCollection>,
    },
    {
      path: "Phonedetails/:id",
      element: <PhoneDetails></PhoneDetails>,
    },
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
