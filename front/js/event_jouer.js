let event_jouer = (function()  {

    let element = document.getElementById("opposite");
    element.style.display = "flex";
    element = document.getElementById("weapon");
    element.style.display = "flex";
    element = document.getElementById("boat");
    element.style.display = "none";
    element = document.getElementsByClassName("btn btn-outline-dark");
    element[0].style.display = "none";

    socket.emit("wannaplay", socket.id);
    
})
let bouton = document.getElementsByClassName("btn btn-outline-dark");
bouton[0].addEventListener('click', event_jouer);