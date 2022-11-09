let mainForm = document.querySelector("#mainForm")
let textInput = document.querySelector("#intext")

mainForm.addEventListener("submit", function(e){
    e.preventDefault()
    alert(textInput.value)
})

let ingredients = document.querySelectorAll(".ingredients")
let ingForm = document.querySelector("#ingredientForm")
let ingredientLabel = document.querySelectorAll(".ingredientLabel")
let returnStr = "Your sandwich contains: "

ingForm.addEventListener("submit", function(e){
    e.preventDefault()
    for(x in ingredients){
        if(ingredients[x].checked){
            returnStr += ingredientLabel[x].innerHTML + ", "
        }
    }
    returnStr = returnStr.substring(0, returnStr.length - 2)
    alert(returnStr)
})

let hairForm = document.querySelector("#hairForm")
let hairRadios = document.querySelectorAll(".hairRadio")

hairRadios[0].addEventListener("click", function(){
    hairRadios[1].checked = false
})
hairRadios[1].addEventListener("click", function(){
    hairRadios[0].checked = false
})
hairForm.addEventListener("submit", function(e){
    e.preventDefault()
    let longShort = hairRadios[1].checked ? "Long" : "Short"
    alert(`Haircut scheduled for ${document.querySelector("#date").value} with ${document.querySelector("#hairCutter").value} for ${longShort} hair`)
})

let createForm = document.querySelector("#createForm")
let pws = document.querySelectorAll(".pw")

createForm.addEventListener("submit", function(e){
    e.preventDefault()
    if(pws[0].value !== pws[1].value){
        alert("Error: Passwords do not match.")
    }else{
        alert(`User Created.\nUsername: ${document.querySelector("#username").value}\nEmail: ${document.querySelector("#email").value}`)
    }
})

