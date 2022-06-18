// event listener on key event on textarea, saves value locally, displays on page load
let noteTextArea = document.getElementById('noteTextArea')
let resetButton = document.getElementById('resetButton')

noteTextArea.addEventListener('keyup', function() {
    localStorage.setItem('textField', noteTextArea.value)
    let textField = localStorage.getItem('textField')
    noteTextArea.value = textField
})

function clearFieldAndData() {
    noteTextArea.value = ''
    localStorage.clear()
}

// handle clear function
let yesClick = document.getElementById('yesClick')
let noClick = document.getElementById('noClick')
let confirmClearParent = document.getElementById('confirmationParentID')

resetButton.addEventListener('click', function() {
    confirmClearParent.style.display = ''
    yesClick.addEventListener('click', function() {
        clearFieldAndData()
        confirmClearParent.style.display = 'none'
    })
    noClick.addEventListener('click', function() {
        confirmClearParent.style.display = 'none'
    })
})

function setTextAreaOnLoad() {
    let textFieldOnLoadValue = localStorage.getItem('textField')
    noteTextArea.value = textFieldOnLoadValue
}

// Copy text to clipboard
let copyButton = document.getElementById('copyButton')
let copyConfirm = document.getElementById('copyConfirm')

copyButton.addEventListener('click', function() {
    let copyText = localStorage.getItem('textField')
    navigator.clipboard.writeText(copyText).then(function() {
        copyConfirm.hidden = false
        setTimeout(function() {
            copyConfirm.hidden = true
        }, 1500)
    }, function() {
        console.log('Error: textArea was unable to copy.')
    })
})

setTextAreaOnLoad()
