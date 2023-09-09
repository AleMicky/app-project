import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPageOne, LazyPageTree, LazyPageTwo } from '../lazyload/pages';
import logo from '../logo.svg'
 
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="lazy1" element={<LazyPageOne />} />
                    <Route path="lazy2" element={<LazyPageTwo />} />
                    <Route path="lazy3" element={<LazyPageTree />} />
                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}