import { Link, Outlet } from "react-router-dom"

const ProductsLayout = () => {
	return (
		<div>
			<nav className='productsNav'>
				<Link to='search'>
					<button>Search</button>
				</Link>
				<Link to='list'>
					<button>List</button>
				</Link>
				<Link to='add'>
					<button>Add</button>
				</Link>
			</nav>

			<Outlet />
		</div>
	)
}

export default ProductsLayout
