export const addNumber = () => {
  return { type: "ADD" };
};

export const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

const initialState = {
  stock: 10,
  goods: 1,
};

const goodsReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case "SUBSTRACT":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case "ADD":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;
