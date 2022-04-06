import Column from "./Column.js"

export default class Kanban {
  constructor(root) {
    this.root = root

    Kanban.columns().forEach(column => {
      // 할일 목록에 대한 컬럼을 생성해서 루트에 append
      const columnView = new Column(column.id, column.title)

      this.root.appendChild(columnView.elements.root)
    })
  }

  static columns() {
    return [
      {
        id: 1,
        title: "Not Started"
      },
      {
        id: 2,
        title: "In Progress"
      },
      {
        id: 3,
        title: "Complete"
      },
    ]
  }
}