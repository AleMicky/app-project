import { Routes, Route, NavLink, Navigate, BrowserRouter } from 'react-router-dom';
import logo from '../logo.svg'
import { ShoppingPage } from '../component-pattems/pages';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>about</h1>} />
                    <Route path="users" element={<h1>users</h1>} />
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}