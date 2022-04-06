import KanbanAPI from "../api/KanbanAPI.js"

export default class DropZone {
  static createDropZone() {
    const range = document.createRange()

    range.selectNode(document.body)

    const dropZone = range.createContextualFragment(`
    <div class="kanban__dropzone"></div>
    `).children[0]

    dropZone.addEventListener("dragover", e => {
      // 새로운 탭을 생성한다.
      e.preventDefault()
      dropZone.classList.add('kanban__dropzone--active')
    })

    dropZone.addEventListener("dragleave", e => {
      dropZone.classList.remove('kanban__dropzone--active')
    })

    dropZone.addEventListener("drop", e => {
      // 새로운 탭을 생성한다.
      e.preventDefault()
      dropZone.classList.remove('kanban__dropzone--active')

      // dropZone이 속해 있는 컬럼을 잡아낸다.
      const columnElement = dropZone.closest(".kanban__column")

      const columnId = Number(columnElement.dataset.id)
      // 전체 dropzone
      const dropZoneInColumn = Array.from(columnElement.querySelectorAll(".kanban__dropzone"))
      // 현재 활성화된 dropzone
      const droppedIndex = dropZoneInColumn.indexOf(dropZone)

      const itemId = Number(e.dataTransfer.getData("text/plain"))
      // 드랍할 아이템
      const droppedItemElement = document.querySelector(`[data-id="${itemId}"]`)
      // 아이템 내부의 dropzone ? top drop zone
      const insertAfter = dropZone.parentElement.classList.contains('kanban__item') ? dropZone.parentElement : dropZone

      if(droppedItemElement.contains(dropZone)){
        //해당 아이템의 dropzone인 경우
        return
      }

      // target item의 다음 요소
      insertAfter.after(droppedItemElement)
      
      KanbanAPI.updateItem(itemId, {
        columnId,
        position: droppedIndex
      })
    })

    return dropZone
  }
}