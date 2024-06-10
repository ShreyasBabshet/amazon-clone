import axiosInstance from "../axios.service";

export const getAllCategories = async () => {
    const response = await axiosInstance.get('/category');
    return response;
}