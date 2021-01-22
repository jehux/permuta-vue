<template>
<div class="back-img">
    <div class="tit-central">
        <div class="card" id="principal">
            <div class="card-body" id="prinB">
                <h5 class="card-title">ERES SANTA SECRETO DE...</h5>
                <h6 class="card-subtitle mb-2 text-muted">NombreInvitado Asignado</h6>
            </div>
        </div>	
    </div>

    <div class="tarjetas">
        <div class="card" id="card1" style="width: 17em;">
            <img src="../assets/img/info.png" class="card-img-top" alt="Fecha">
            <div class="card-body">
                <p class="card-text">Fecha del intercambio: </p>
                <p class="card-text">DD/MM/AA </p>
            </div>
        </div>
        <div class="card" id="card2" style="width: 17em;">
            <img src="../assets/img/diner.png" height="267" width="30" class="card-img-top" alt="Costo">
            <div class="card-body">
                <p class="card-text">El costo mínimo del regalo es: </p>
                <p class="card-text">$$$$$$ </p>
            </div>
        </div>
        <div class="card" id="card2" style="width: 17em;">
            <img src="../assets/img/reg.png" height="262" class="card-img-top" alt="preferencia">
            <div class="card-body">
                <p class="card-text">Selecciona preferencia: </p>
                <div class="bd-example">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-warning">Libros</button>
                        <button type="button" class="btn btn-outline-warning">Licores</button>
                        <button type="button" class="btn btn-outline-warning">Gadgets</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" id="card2" style="width: 17em;">
            <img src="../assets/img/mensaje.png" height="242" class="card-img-top" alt="mensaje">
            <div class="card-body">
                <p class="card-text"> Tienes un mensaje </p>
                <p class="card-text"> Mensaje del creador si es que ha escrito alguno </p>
            </div>
        </div>
    </div>
        <div class="parteInf">
            <div class="card" id="prefer" style="width: 70%;">
            <div class="card-body">
                <p class="card-text"> Tenemos un secreto que contarte </p>
                <p class="card-text"> No queremos que quedes mal así que te diremos que NOM-INVITADO tiene preferencia por:  (opcionSelec)</p>
                <p class="card-text"> Pero ten cuidado, no le vayas a decir a nadie... </p>
            </div>
        </div>
        <div class="boton"> 
            <router-link to="/"><button type="button" class="btn btn-lg btn-warning ">  Finalizar  </button></router-link>
        </div>
    </div>
</div>
</template>

<style scoped>
.mi-navbar{
    background-color: #090f1d;
}

.back-img{
    background-image: url("../assets/img/normal.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 1;
    padding: 3em;

}
.back-img:before {
content:'';
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.3);
width:100%;
height:100%;
}
.card{
background-color: rgba(0,0,0,0.3);
}
.tarjetas{
display: inline;
}
.card-text{
color: white;
}
.card-body{
color: rgba(100,100,100,100.3);
}
#card1{
display: inline-block;
margin-bottom: 1em;
margin-right: 1%;
margin-left: 5%;
}
#card2{
display: inline-block;
margin-bottom: 1em;
margin-right: 1%;
}
#card3{
display: inline-block;
margin-bottom: 1em;
margin-right: 1%;
}
#card4{
display: inline-block;
margin-bottom: 1em;
margin-right: 1%;
}
.tit-central{
position: center;
width: 90%;
margin-bottom: 0.5em;
margin-top: 1em;
margin-left: 5%;
}
#principal{
position: center;
margin-bottom: 2em;
text-align: center;
}
#prinB{
position: center;
text-align: center;
}
.card-title{
color:white;
text-align: center;
font-size: 2em;
}
.card-subtitle{
color: white;
text-align: center;
font-size: 1.5em;
}
.parteInf{
margin-left: 5%;
margin-bottom: 0.5em;
display: inline;
}
#prefer{
display: inline-block;
}
button{
margin: 0;
}
.boton{
display: inline-block;
margin-left: 6em;
margin-bottom: 6em;
position: relative;
}
.mensj-Org{
color: rgba(100,100,100,100.3);
}
.card #prefer {
margin-bottom: 1em;
height: 3em;
}
.controls{
position:right;
padding:4em;
}
</style>