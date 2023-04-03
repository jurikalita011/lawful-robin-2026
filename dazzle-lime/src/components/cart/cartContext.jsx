import React from "react";
import { useEffect,useReducer,createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let List = JSON.parse(localStorage.getItem("cartdata")) || [];

  const initialState = {
    data: [...List],
    totalamount: 0,
    totalProducts: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const cartProduct = {
          id: action.payload.id,
          newPrice: action.payload.price,
          poster: action.payload.image,
          Quantity: action.payload.Quantity,
          title: action.payload.title,
        };
  
        return {
          ...state,
          data: [...state.data, cartProduct],
        };
      }
  
      case "REMOVE": {
        return {
          ...state,
          data: state.data.filter((el) => el.id !== action.payload),
        };
      }
  
      case "IncQuantity": {
        const updatedCart = state.data.map((el) => {
          if (el.id === action.payload) {
            return { ...el, Quantity: el.Quantity + 1 };
          }
          return el;
        });
  
        return { ...state, data: updatedCart };
      }
  
      case "DecQuantity": {
        const postDecrement = state.data.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              Quantity: el.Quantity - 1,
            };
          }
          return el;
        });
        return {
          ...state,
          data: postDecrement,
        };
      }
  
      case "TOTAL": {
        var { totalProducts, totalamount } = state.data.reduce(
          (acc, el) => {
            var { Quantity, price } = el;
            acc.totalProducts += Quantity;
  
            var updatedamount = price * Quantity;
            acc.totalamount += updatedamount;
  
            return acc;
          },
          { totalProducts: 0, totalamount: 0 }
        );
        return {
          ...state,
          totalProducts,
          totalamount,
        };
      }
  
      case "CLEAR": {
        return {
          ...state,
          data: [],
        };
      }
  
      default: {
        return state;
      }
    }
  };
  

  const [state, dispatch] = useReducer(reducer, initialState);

  const addProducts = (el) => {
    
    dispatch({ type: "ADD_TO_CART", payload: { el } });
  };

  const removeProduct = (id) => {
    return dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const clearData = () => {
    return dispatch({
      type: "CLEAR",
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "IncQuantity",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DecQuantity",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "TOTAL",
    });
  }, [state.data]);

  useEffect(() => {
    localStorage.setItem("cartdata", JSON.stringify(state.data));
  }, [state.data]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        removeProduct,
        clearData,
        increment,
        decrement,
        addProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
