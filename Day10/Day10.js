document.querySelector("#button").addEventListener("click", () => {
  document.querySelector("#para").innerHTML =
    "You changed the text after clicking";
});
document.querySelector("#dbButton").addEventListener("dblclick", () => {
  document.querySelector("#image").style.visibility = "visible";
});

document.querySelector("#para2").addEventListener("mouseover", () => {
  document.querySelector("#para2").style.backgroundColor = "green";
});

document.querySelector("#para2").addEventListener("mouseout", () => {
  document.querySelector("#para2").style.background = "none";
});


var list = document.querySelector('#list');
list.addEventListener('click',function(event){
    console.log(event.target.textContent);
})