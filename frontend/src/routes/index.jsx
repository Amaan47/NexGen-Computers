import {createBrowserRouter} from "react-router-dom"
import App from "../../../../MERN-ECOMMERCE/frontend/src/App"
import { Children } from "react";

const router = createBrowserRouter([
    {
        path: "/",
         element: <App />,
        Children: [
            {
                path: "/collection",
                element: <Collection />
            }
        ]
    }
])
export default router;