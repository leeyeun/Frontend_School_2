import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sale, soldout } from "../modules/stockCounter";
function StockCounter() {
  const { message } = useSelector((state) => ({
    message: state.stockReducer.message,
  }));

  console.log("mm", message);

  const { stock } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
  }));

  const dispatch = useDispatch();
  const onSale = () => dispatch(sale());
  const onSoldOut = () => dispatch(soldout());

  useEffect(() => {
    if (stock <= 0) {
      onSoldOut();
    }
  }, [stock]);
  return (
    <div>
      {/* {stock === 0 } */}
      <p>{message}</p>
    </div>
  );
}

export default StockCounter;
