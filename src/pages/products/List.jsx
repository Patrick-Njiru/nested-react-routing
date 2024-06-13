import { Link } from "react-router-dom"
import { PRODUCTS } from "../../data"
import ProductCard from "../../components/ProductCard"

const List = () => {

	return (
		<div className='list'>
			{PRODUCTS.map((p) => (
				<Link to={`/products/${p.id}`} key={p.id} >
					<ProductCard {...p} />
				</Link>
			))}
		</div>
	)
}

export default List
