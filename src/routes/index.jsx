import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'contactus',
                element: <ContactUs />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
        ]
    }
])

export default router;