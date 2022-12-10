import { ListResponse } from "../types/common";
import { Movie } from "../types/movie";
import axiosClient from "./axios-client";

const movieApi = {
  getCurrentlyMovies(): Promise<ListResponse<Movie>> {
    return axiosClient.get("/movie/now_playing");
  },
  getMovieDetails(id: string): Promise<Movie> {
    return axiosClient.get(`/movie/${id}`);
  },
};

export default movieApi;
