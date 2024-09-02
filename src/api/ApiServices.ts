import axios from "axios";
import { BASE_URL } from "./Api";

export interface IApiRequestParams {
  url: string;
  data?: Record<string, unknown>;
  params?: Record<string, unknown>;
  baseURL?: string;
}

export class ApiServices {
  static async getRequest(params: IApiRequestParams) {
    const { url, params: requestParams, baseURL = BASE_URL } = params;

    try {
      const response = await axios.get(url, {
        baseURL,
        params: requestParams,
      });

      return response;
    } catch (error: unknown) {
      console.log(`error msg ${url} `, error);
    }
  }
}
