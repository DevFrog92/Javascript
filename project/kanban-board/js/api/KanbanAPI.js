export default class KanbanAPI{
  static getItems(columnId) {
    const column = read().find(column => column.id === columnId)

    if(!column) {
      return []
    }

    return column.items
  }
  static insertItem(columnId, content) {
    const data = read()
    const column = data.find(column => column.id === columnId)
    const item = {
      id: Math.floor(Math.random() * 100000),
      content
    }

    if(!column) {
      // 컬럼이 없는 경우
      throw new Error("Column does not exist.")
    }

    // 컬럼이 있는 경우
    // 할일을 목록에 추가한다.
    column.items.push(item)
    console.log("add item", column)
    console.log("add item to data column", data)
    console.log(data[1] === column)
    // 저장된 사항을
    // data를 저장해도 되는 것은
    // data에서 참조하고 있는 객체의 프로퍼티가 변경되었기 때문이다.
    // 참조 데이터의 변경
    save(data)

    return item
  }

  static updateItem(itemId, newProps) {
    // localStorage에 저장되엉 있는 할 일 목록을 로드한다.
    const data = read()
    // item와 currentColumn은 즉시 실행함수의 return 값
    const [item, currentColumn] = (() => {
      for(const column of data) {
        // item을 찾는다.
        const item = column.items.find((item) => item.id === itemId)

        // 아이템이 있는 경우
        if(item) {
          return [item, column]
        }
      }
    })()

    // 아이템이 없는 경우
    if(!item) {
      throw new Error("Item not found")
    }

    // undefined는 item을 붙일때
    item.content = newProps.content === undefined ? item.content : newProps.content
    // Update column and position

    // 옮기는 경우
    // 반대는 blur의 경우
    if(
      newProps.columnId !== undefined
      && newProps.position !== undefined) {
        const targetColumn = data.find(column => column.id === newProps.columnId)

        if(!targetColumn) {
          throw new Error("Target column not found.")
        }

        // Delete item from it's currentColumn
        currentColumn.items.splice(currentColumn.items.indexOf(item), 1)

        // Move item into ti's new column and position
        targetColumn.items.splice(newProps.position, 0, item)
    }

    save(data)
  }

  static deleteItem(itemId) {
    const data = read()

    for(const column of data) {
      const item = column.items.find((item) => item.id === itemId)

      if(item) {
        column.items.splice(column.items.indexOf(item, 1))
      }
    }

    save(data)
  }
}

// read localStorage에 저장된 column별 todo 목록을 불러온다.
function read() {
  // localStorage는 synchronous
  const json = localStorage.getItem('kanban-data')

  // 저장된 todo가 없는 경우
  if(!json) {
    return [
      {
        id: 1,
        items: []
      },
      {
        id: 2,
        items: []
      },
      {
        id: 3,
        items: []
      },
    ];
  }

  // 저장된 todo가 있는 경우
  // json -> object
  return JSON.parse(json)
}

// localStorage에 todo item을 추가
function save(data) {
  localStorage.setItem('kanban-data', JSON.stringify(data))
}