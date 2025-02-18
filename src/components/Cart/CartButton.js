import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { storeActions } from "../store/index"

const CartButton = (props) => {
 
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(storeActions.toggleShoppingCart()); // dispatch the action
  };

  return (
    <button className={classes.button} onClick={handleAddToCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
