
import './index.css'

const Products = props => {
  const {productData} = props
  const {title, price, category, image} = productData
  return (
    <li className="listCard">
        <div>
          <img src={image} alt={title} className="listCardImage" />
        </div>
        <div className="detailsCard">
          <p className="listPara">{title}</p>
          <p className="listPara">{price} Rs</p>
          <p className="listPara">Category: {category}</p>
        </div>
    </li>
  )
}

export default Products