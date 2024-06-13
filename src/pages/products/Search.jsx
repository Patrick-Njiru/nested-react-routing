import React from "react"
import { PRODUCTS } from "../../data"
// import { useNavigate } from "react-router-dom"
import ProductDisplay from "./ProductDisplay"
import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard"

const Search = () => {
	const [search, setSearch] = React.useState("")
	// const navigate = useNavigate()

	const handleSearch = (e) => setSearch(e.target.value)

	const searchResults = PRODUCTS.filter(
		(p) => p.pName.includes(search) || p.description.includes(search)
	)

	return (
		<>
			<div className='searchInput'>
				<input
					type='search'
					className='search'
					placeholder='What are you looking for?'
					onChange={handleSearch}
				/>
			</div>
			<div className='searchResults'>
				{search
					? searchResults.length > 0
						? searchResults.map((p) => (
								<Link to={`/products/${p.id}`} key={p.id}>
									<ProductCard {...p} />
								</Link>
						  ))
						: "No products match your search"
					: "Search for products"}
			</div>
		</>
	)
}

export default Search
