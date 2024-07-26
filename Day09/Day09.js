var text = document.getElementById('text').innerText = "This is changed text"
document.querySelector('.para').style.backgroundColor = "red"
document.querySelector('.para').style.padding = "5px"

var target = document.querySelector('#target-section');

var div = document.createElement('div')
div.append(text);

var h2 = document.createElement('h2')
h2.innerText = "I am an apppended child in the targeted section"
target.appendChild(h2)

h2.remove()
var body_1 = document.getElementById('body')
document.body.appendChild(div)
// var last_child = body_1.lastElementChild
// body_1.removeChild(last_child)

document.getElementById('name').setAttribute('placeholder','Enter your surname')
