import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Notification from "../pages/notifications"
import Explore from "../pages/explore/"
import MainLayout from "../layouts/main"
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
              index: true,
              element: <Home/>           
             },
            {
                path: "explore",
                element:  <Explore/>
            },
            {
                path: "notification",
                element:<Notification/>
            }
        ]
    },
])

export default routes