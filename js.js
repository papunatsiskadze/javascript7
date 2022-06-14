const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('drag start',() => {
        console.log('Drag Start')
    })
})

containers.forEach(container => {
    container.addEventListener('drag over', () => {
        console.log('drag over')
    })
})