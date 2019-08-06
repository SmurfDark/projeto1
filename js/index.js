/* JavaScript site */
console.log("Aplicação Inicial")
var img = document.getElementsByTagName("img")[0]
document.addEventListener(img, function{
    alert('clicou');
}, false);
var nav = document.getElementsByTagName('nav')[0]
nav.addEventListener('click', fuction (){
    alert("clicou");
}, false);