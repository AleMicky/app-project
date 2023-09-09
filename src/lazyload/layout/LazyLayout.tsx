import { NavLink, Routes ,Route} from 'react-router-dom';
import { LazyPageOne, LazyPageTree, LazyPageTwo } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1"> Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2"> Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3"> Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
          <Route path='lazy1' element={<LazyPageOne/>}/>
          <Route path='lazy2' element={<LazyPageTwo/>}/>
          <Route path='lazy3' element={<LazyPageTree/>}/>
      </Routes>
    </div>
  )
}


export default LazyLayout;