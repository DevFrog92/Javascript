import Dropzone from "./DropZone.js"
import KanbanAPI from "../api/KanbanAPI.js"
import Item from "./Item.js"

export default class Column  {
    constructor(id, title) {
      const topDropZone = Dropzone.createDropZone()

      this.elements = {}
      this.elements.root = Column.createRoot()
      // root component 생성된 요소에 접근
      this.elements.title = this.elements.root.querySelector('.kanban__column-title')
      this.elements.items = this.elements.root.querySelector('.kanban__column-items')
      this.elements.addItem = this.elements.root.querySelector('.kanban__add-item')

      // root component set custom attr id
      this.elements.root.dataset.id = id

      this.elements.title.textContent = title
      // 사용자가 drag한 아이템을 모든 아이템의 최상단에 배치하려고 할 때,
      // 최상단에서 놓을 수 있는 구역을 지정해 주기 위해서 topDropZone을 적용한다.
      this.elements.items.appendChild(topDropZone)

      // 생성 버튼 인벤트 생성
      this.elements.addItem.addEventListener('click', () => {
        // id: column id
        const newItem = KanbanAPI.insertItem(id, "");

        this.renderItem(newItem)
      })

      KanbanAPI.getItems(id).forEach(item => {
        this.renderItem(item)
      })
    }

    static createRoot() {
      //TODO: range 객체에 대한 추가적인 공부가 필요
      const range = document.createRange()

      range.selectNode(document.body)

      // createContextualFragment의 return은 array이기 때문에,
      // [0]으로 접근해준다.
      return range.createContextualFragment(`
      <div class="kanban__column">
      <div class="kanban__column-title"></div>
      <div class="kanban__column-items"></div>
      <button class="kanban__add-item" type="button">+ Add</button>
      </div>
      `).children[0]
    }

    renderItem(data) {
      // data -> 새로 생성한 할일 아이템
      const item = new Item(data.id, data.content)
      // instance
      this.elements.items.appendChild(item.elements.root)
    }
}