import http from "./httpService";
import { apiUrl } from "../../config.json";

export function getOrders() {
  return http.get(apiUrl);
}

export function getShipments(id) {
  return http.get(apiUrl + "/" + id);
}

export function getComments(item){
  return http.get(apiUrl + "/comment/" + item);
}
