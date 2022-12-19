document.querySelectorAll('.button').forEach(e => {
    e.addEventListener('click', (e) => {
        const groups = document.querySelectorAll('.group')
        groups.forEach(element => {
            if (element.getAttribute('id').substring(5) === e.target.getAttribute('id')) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
            
        })
    })
})