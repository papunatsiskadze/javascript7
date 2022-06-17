const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
        console.log('Drag Start')
    })
    
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
        console.log('Drop')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', () => {
        console.log('Drag Over')
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})
