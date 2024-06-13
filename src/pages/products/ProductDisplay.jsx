import { useParams } from "react-router-dom"
import { PRODUCTS } from "../../data"
import { useState } from "react"
import ProductCard from "../../components/ProductCard"

const ProductDisplay = () => {
	const [error, setError] = useState("")
	const { id } = useParams()
	let product

	try {
		if (!id) {
			throw new ReferenceError("'id' does not exist in url parameters")
		}
		product = PRODUCTS.find((p) => p.id === Number(id))
	} catch (err) {
		setError(err)
	} finally {
		error ? console.error(error) : console.table(product)
	}

	return <div>{error ? error : <ProductCard {...product} />}</div>
}

export default ProductDisplay
