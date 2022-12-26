import { Link } from 'react-router-dom';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar({menus, categorias}) {

  return (
      <div className='navbar'>
         <a href="/"><h1 className='nav__logo'>SmartRecruit 👨🏽‍💻</h1></a>
        {
          menus.map((menu)=> {
            return <Link className='navbar__menu' to={menu.href}>{menu.name}</Link>
          })
        }
        {
          categorias.map((categoria)=>{
            return <Link className='navbar__menu' to={`/category/${categoria.id}`}>{categoria.name}</Link>
          })
        }

        <Link to={"/cart"}><CartWidget/></Link>
      </div>
  );
}

export default NavBar;