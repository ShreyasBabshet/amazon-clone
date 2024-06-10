import { Action, AppAction, AppState, Basket } from "./App.types";
import { Dispatch, createContext, useReducer } from "react";
import { getAllCategories } from "./services/category.service";

const initialState: AppState = {
  basket: [],
  deliveryAddress: null,
  searchedCategory: null,
  categories: [],
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  const basketClone = state.basket;
  switch (action.type) {
    case "ADD_TO_CART":
      const index = basketClone.findIndex(
        (item) => item.productId === action.data.productId
      );
      if (index === -1) {
        return {
          ...state,
          basket: [...basketClone, action.data],
        };
      }
      return {
        ...state,
      };
    case "REMOVE_FROM_CART":
      const newBasket = basketClone.filter(
        (product) => product.productId !== action.data.productId
      );
      return { ...state, basket: newBasket };
    case "GET_CATEGORIES":
      console.log(action.data);
      return { ...state, categories: action.data };
    case "SEARCH_CATEGORY":
      return { ...state, searchedCategory: action.data.searchStr };
    case "SET_ADDRESS":
      return { ...state, deliveryAddress: action.data.address };
    default:
      return { ...state };
  }
};

export const withProvider = (Component: () => JSX.Element) => {
  return () => {
    return (
      <AppProvider>
        <Component />
      </AppProvider>
    );
  };
};

// export const withDispatch = (dispatch: React.Dispatch<AppAction>) => {
//     const getUsers = async () => {
//         try {
//             dispatch({ type: "ADD_TO_CART" });
//             // const users = await getUsersAPI();
//             dispatch({
//                 type: "GET_USER_SUCCESS",
//                 data: users,
//             });
//         } catch (e) {
//             dispatch({ type: "GET_USERS_FAILED" });
//         }
//     };
//     return {
//         getUsers,
//     };
// };

// export const getUsers = async (dispatch: Dispatch<any>) => {
//   try {
//     dispatch({ type: "GET_USER_PENDING" });
//     const users = await getUsersAPI();
//     dispatch({
//       type: "GET_USER_SUCCESS",
//       data: users,
//     });
//   } catch (e) {
//     dispatch({ type: "GET_USERS_FAILED" });
//   }
// };

export const getBasketTotal = (basket: Basket[]) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};
export const fetchAppData = async (dispatch: React.Dispatch<AppAction>) => {
  try {
    const response = await getAllCategories();
    console.log(response);
    dispatch({
      type: "GET_CATEGORIES",
      data: response?.data?.result,
    });
  } catch (e) {
    console.log(e);
  }
};

export interface IAppContext {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // getUsers: () => void;
}
export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // const { getUsers } = withDispatch(dispatch);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
