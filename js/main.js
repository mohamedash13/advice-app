// api

let but = document.getElementById("refresh")
let id = document.getElementById("id")
let advice = document.getElementById("advice")
function api(){
    fetch("https://api.adviceslip.com/advice").then((result)=> {
        let myData = result.json()
        return myData
    }).then((data)=>{
        id.innerHTML = `${data["slip"]["id"]}`
        advice.innerHTML = `"${data["slip"]["advice"]}"`
    })
}

api()

but.addEventListener("click",()=>{
    api() 
})

// end api


// img
let img = document.getElementById("img")
function myFunction(x) {
  if (x.matches) { // If media query matches
    img.src = "./images/pattern-divider-mobile.svg"
  } else {
    img.src = "./images/pattern-divider-desktop.svg"
  }
}

// Call listener function at run time
myFunction(window.matchMedia("(max-width: 768px)"));

// Add event listener
window.matchMedia("(max-width: 768px)").addListener(myFunction);
// end
