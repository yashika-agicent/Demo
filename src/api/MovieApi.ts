import { API_END_POINTS } from "./Api";
import { ApiServices } from "./ApiServices";

export const fetchMoviesApi = async () => {
  return await ApiServices.getRequest({
    url: API_END_POINTS.LIST_MOVIES,
  });
};
