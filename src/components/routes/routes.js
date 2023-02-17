import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import About from "../../pages/About";
import TopRated from "../../pages/TopRated";
import Cart from "../../pages/Cart";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "top-rated",
                element: <TopRated />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);
export default routes;