import Dropzone from "./DropZone.js"
import KanbanAPI from "../api/KanbanAPI.js"

export default class Item {
  constructor(id, content) {
    // 각 아이템 밑에 생성해줄 dropzone
    const bottomDropZone = Dropzone.createDropZone()

    this.elements = {}
    this.elements.root = Item.createRoot()
    this.elements.input = this.elements.root.querySelector(".kanban__item-input")

    this.elements.root.dataset.id = id
    this.elements.input.textContent = content
    // 변경사항을 판단하기 위한 변수
    this.content = content
    // input tag 및에 dropzone이 생성되게 된다.
    this.elements.root.appendChild(bottomDropZone)

    // 사용자가 할일을 작성하고 focus가 input box 밖으로 이동할 경우 자동으로 저장한다.

    const onBlur = () => {
      const newContent = this.elements.input.textContent.trim()

      // 변경사항이 없는 경우
      if(newContent === this.content) {
        return
      }

      // 변경사항이 있는 경우
      this.content = newContent
      // id: item id
      KanbanAPI.updateItem(id, {
        content: this.content
      })
    }

    this.elements.input.addEventListener("blur", onBlur)
    this.elements.root.addEventListener("dblclick",() => {
    const check = confirm("Are you sure you want to delete this item?")

      if(check) {
        KanbanAPI.deleteItem(id)

        // 삭제될 요소의 이벤트를 삭제해 준다.
        this.elements.input.removeEventListener('blur', onBlur)
        // 부모요소에서 현재의 아이템을 삭제한다.
        this.elements.root.parentElement.removeChild(this.elements.root)
      }
    })

    // 사용자가 아이템을 드래그 시작할 때
    this.elements.root.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", id)
    })

    // 드랍하는 경우
    // 추가하는 로직은 dropZone element에서 수행한다.
    this.elements.input.addEventListener("drop", e => {
      e.preventDefault()
    })
  }

  static createRoot() {
    const range = document.createRange()

    range.selectNode(document.body)

    return range.createContextualFragment(`
      <div class="kanban__item" draggable="true">
        <div class="kanban__item-input" contenteditable></div>
      </div>
    `).children[0]
  }
}