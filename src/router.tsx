import {createBrowserRouter} from "react-router";
import App from "./App";
import {Home} from "./page/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Home},
            {
                path: "auth",
                children: [
                    {index: true, Component: () => <div>Auth Home</div>},
                    {path: "login", Component: () => <div>Login Page</div>},
                    {path: "register", Component: () => <div>Register Page</div>},
                ],
            },
            {
                path: "*",
                element: <div>404 Not Found</div>
            }
        ]
    },
]);