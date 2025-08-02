import AddUser from './adduser/AddUser.jsx';
import './App.css';
import User from './getuser/user.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Update from './updateuser/Update.jsx';
function App() {
  const route = createBrowserRouter([
    {
    path:"/",
    element: <User />,
    },
    {
      path:"/add",
      element:<AddUser />,
    },
    {
      path:"/update/:id",
      element:<Update />
    },
  ]) 
  return (
    <div className="usertable">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
