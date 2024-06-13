import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header>
			<nav className='navbar'>
				<NavLink to='/'> Home </NavLink>
				<NavLink to='login'> Login </NavLink>
				<NavLink to='products'> Products </NavLink>
			</nav>
		</header>
	)
}

export default Navbar
