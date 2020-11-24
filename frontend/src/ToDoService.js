import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:5000` });

export default class ToDoService {
  static instance = null;

  static getInstance() {
    if (ToDoService.instance == null) {
      ToDoService.instance = new ToDoService();
    }
    return this.instance;
  }

  getItemList = async () => {
    try {
      // let items = await this.getItems();
      let items = await api.get("/items");
      console.log(items.data);
      return items.data;
    } catch (error) {
      console.log("GET ERROR: " + error);
      return [];
    }
  };

  addToDo = async (item) => {
    let res;
    try {
      res = await api.post("/items", {
        item: item.item,
        complete: item.complete,
      });
      return res.data._id;
    } catch (error) {
      console.log(error);
    }
    //console.log(res);
  };

  async removeItem(itemID) {
    try {
      await api.delete(`/items/${itemID}`);
      console.log("Service called with item id: " + itemID);
    } catch (error) {
      console.log(error);
    }
  }

  async toggleItemComplete(itemID) {
    try {
      await api.patch(`/items/${itemID}`);
      console.log("Service called with item id: " + itemID);
    } catch (error) {
      console.log(error);
    }
  }
}
