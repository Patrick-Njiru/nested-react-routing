import PropTypes from "prop-types"

const ProductCard = ({ pName, description }) => {
	return (
		<div className='productCard'>
			<h1>{pName}</h1>
			<p>{description}</p>
		</div>
	)
}

ProductCard.propTypes = {
	pName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ProductCard
