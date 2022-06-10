// event listener on key event on textarea, saves value locally, displays on page load
let noteTextArea = document.getElementById('noteTextArea')
let resetButton = document.getElementById('resetButton')

noteTextArea.addEventListener('keyup', function() {
    localStorage.setItem('textField', noteTextArea.value)
    let textField = localStorage.getItem('textField')
    noteTextArea.value = textField
})

resetButton.addEventListener('click', function() {
    noteTextArea.value = ''
    localStorage.clear()
})

function setTextAreaOnLoad() {
    let textFieldOnLoadValue = localStorage.getItem('textField')
    noteTextArea.value = textFieldOnLoadValue
}

setTextAreaOnLoad()
