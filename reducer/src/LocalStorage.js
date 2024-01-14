export const LocalStorage = {
  setTasksInLocalStorage: (key, mapObjects) => {
    localStorage.setItem(key, JSON.stringify(mapObjects))
  },
  getTasksInLocalStorage: (key) => {
    const mapObj = JSON.parse(localStorage.getItem(key))

    return mapObj ? mapObj : { tasks: [] }
  },
}
