const $today = document.getElementById('today')
const $saved = document.getElementById('saved')
const $form = document.getElementById('form')
const $fullName = document.getElementById('fullName')
const $status = document.getElementById('status')
const $textarea = document.getElementById('textarea')

const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
}

// const today = new Date()
// $today.textContent = today.toLocaleString('en-CA', options)

$form.addEventListener('submit', function (e) {
    e.preventDefault()

    const fullName = $fullName.value

    const status = $status.value

    const textarea = $textarea.value

    const saved = new Date()
    $saved.textContent = `Last Saved on: ${saved.toLocaleString('en-CA', options)}`


    localStorage.setItem("fullName",fullName)
    localStorage.setItem("status",status)
    localStorage.setItem("textarea",textarea)
    localStorage.setItem('saved',saved)

    // const obj = {
    //     fullName: fullName,
    //     status: status,
    //     textarea: textarea,
    //     timestamp: saved.getTime()
    // }

    // localStorage.getItem('saveBtn', JSON.stringify(obj))

    


})

document.getElementById("submit").onclick = function(e) {
    alert("The application has been submited!")
    document.getElementById("form").reset(); 
    
}



const ls = localStorage.getItem('saveBtn')

if (ls) {
    // const obj = JSON.parse(ls)
    
    const fullName = $fullName.value

    const status = $status.value

    const textarea = $textarea.value

    const saved = new Date()
    $saved.textContent = `Last Saved on: ${saved.toLocaleString('en-CA', options)}`
}