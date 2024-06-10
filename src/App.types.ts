// import { MenuItems } from "./components/sidenav/sidenav.types";
export interface Basket {
    productId: number,
    imageUrl: string,
    title: string,
    price: number,
    rating: number
}
export interface Address {
    fullName: string,
    phone: number,
    flat: string,
    area: string,
    city: string,
    landmark: string,
    state: string
}
export interface AppState {
    basket: Basket[],
    deliveryAddress: Address | null,
    searchedCategory: string | null,
    categories: any
}
export interface Action {
    type: string,
    data?: any
}
export interface AppAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "SET_ADDRESS" | "SEARCH_CATEGORY" | "GET_CATEGORIES",
    data?: any
}