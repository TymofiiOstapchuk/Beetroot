import { createBrowserRouter, NavLink, Outlet } from 'react-router-dom'
import Counter from "@/components/Counter";
import Button from "@/components/Button";
import ColorPicker from '@/components/ColorPicker'


export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: "/", element: <Counter /> },
            { path: "/button", element: <Button /> },
            { path: "/picker", element: <ColorPicker /> }
        ]
    }
])


function NavLayout() {
    return (
        <div className="container mx-auto">
            <nav className="nav">
                <NavLink className="nav__item" to="/">
                    Counter
                </NavLink>
                <NavLink className="nav__item" to="/button">
                    Button
                </NavLink>
                <NavLink className="nav__item" to="/picker">
                    ColorPicker
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}