export const setItemsIntoLocalStorage = (key, value, isJson = false) => {
  if (isJson) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getItemsFromLocalStorage = (key, isJson = false) => {
  const item = localStorage.getItem(key);
  if (item) {
    if (isJson) {
      return JSON.parse(item);
    } else {
      return item;
    }
  }
};
