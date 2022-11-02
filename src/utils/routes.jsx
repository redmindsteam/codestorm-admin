import { Registration } from "../Pages";
import { Login } from "../Pages";
import { ChangePassword } from "../Pages";
import { Home } from "../Pages";

export const routes = [
    {
        path: '/',
        exact: true,
        component: <Home/>
    },
    {
        path: '/register',
        exact: true,
        component: <Registration/>
    },
    
    {
        path: '/login',
        exact: true,
        component: <Login/>
    },
    {
        path: '/newpassword',
        exact: true,
        component: <ChangePassword/>
    },
]