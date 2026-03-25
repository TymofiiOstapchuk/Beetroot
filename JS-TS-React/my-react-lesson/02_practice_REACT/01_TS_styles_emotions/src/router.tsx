import { createBrowserRouter, NavLink, Outlet } from 'react-router-dom'
import Calculator from '@/components/Calculator'
import CoursesList from '@courses/CoursesList'
import Shapes from '@/components/Shapes'
import Form from '@/components/Form';
import Pitfall from "@/components/Calculator/Pitfall";


export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: "/", element: <Calculator /> },
            { path: "/courses", element: <CoursesList /> },
            { path: "/pitfall", element: <Pitfall /> },
            { path: "/shapes", element: <Shapes /> },
            { path: "/form", element: <Form /> },
        ]
    }
])


function NavLayout() {
    return (
        <div className="container mx-auto">
            <nav className="nav">
                <NavLink className="nav__item" to="/">
                    Calculator
                </NavLink>
                <NavLink className="nav__item" to="/courses">
                    Courses
                </NavLink>

                <NavLink className="nav__item" to="/pitfall">
                    Pitfall TS
                </NavLink>
                <NavLink className="nav__item" to="/shapes">
                    Shapes
                </NavLink>
                <NavLink className="nav__item" to="/form">
                    Form
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}