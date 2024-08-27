import "./foodDisplay.scss";
import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assests/frontend_assets/assets";
// eslint-disable-next-line react/prop-types
function FoodDisplay({ category }) {
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-menu-items">
        {food_list ? (
          food_list.map((item, i) => {
            if (category === "All" || item.category === category) {
              return (
                <FoodItem
                  key={i}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                />
              );
            }
          })
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;
