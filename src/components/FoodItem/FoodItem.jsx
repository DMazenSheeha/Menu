import "./foodItem.scss";
import { assets } from "../../assests/frontend_assets/assets";

// eslint-disable-next-line react/prop-types
function FoodItem({ image, name, description, price }) {
  return (
    <div className="food-item">
      <div className="image-container">
        <img src={image} alt="" className="item-image" />
      </div>
      <div className="details">
        <div className="rate">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="desc">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
