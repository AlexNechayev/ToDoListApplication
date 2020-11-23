export default class ToDoService {
  static instance = null;

  static getInstance() {
    if (ToDoService.instance == null) {
      ToDoService.instance = new ToDoService();
    }
    return this.instance;
  }

  addToDo(item) {
    try {
      //Backend: Post item
      console.log(
        "Service called with item details: " +
          item.id +
          " " +
          item.text +
          " " +
          item.complete
      );
    } catch (error) {
      console.log(error);
    }
  }

  initItemList() {
    let items = [];
    try {
      //item = Initialization of the item list;
      console.log("Initializing the item list...");
      return items;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  removeItem(itemID) {
    try {
      //find the given id in the database and erase it from the list.
      console.log("Service called with item id: " + itemID);
    } catch (error) {
      console.log(error);
    }
  }

  toggleItemComplete(itemID) {
    try {
      //find the given id in the database then toggle it's state.
      console.log("Service called with item id: " + itemID);
    } catch (error) {
      console.log(error);
    }
  }
}
