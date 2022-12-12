import http from "./Httpcommon";
class ItemsService {
  getitems() {
    return http.get("/components");
  }
}
export default new ItemsService();
