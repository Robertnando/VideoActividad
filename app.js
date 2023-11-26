"use strict";
let videoflo = document.querySelector('.videoBoton')
console.log(videoflo);

videoflo.addEventListener("play",function() {
    console.log("Se dio play");
})

videoflo.addEventListener("seeking", function () {
    console.log("Se esta utilizando la barra de busqueda en este momento", this.currentTime);
})

videoflo.addEventListener("ended", function () {
    console.log("El video termino de nuevo!")

});

videoflo.addEventListener("pause", function () {
    console.log("el video se pauso causa")
    let desicion = confirm('Desea continuar viendo el shitpost denuevo?')
    console.log(desicion);
    if (desicion){
        videoflo.start
    }else{
        window.location="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfEyyvsNpuLd_VMGcOFNSrPfFp-v9r1SKuA&usqp=CAU";
    }
})

//Set interval
function WARIO() {
    console.log("WAAAAAAAAAAAAAARIO")
}


let timer = setInterval(function () {
    WARIO();
}, 2000)

//Set Timeout
function Wario() {
    alert("WAAARIO!")
}
function mario() {
    alert("mario")
}

let timer2 = setTimeout(function (){
    mario();
}, 4000);