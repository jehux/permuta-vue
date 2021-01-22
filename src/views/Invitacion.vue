<template>
		<div class="back-img">
			<div class="tit-central">
                <div class="card" id="principal">
                        <div class="card-body" id="prinB">
                        <h5 class="card-title">En este año...</h5>
                        <h6 class="card-subtitle mb-2 text-muted">¿Te gustaría ser santa y recibir obsequio?</h6>
                    </div>
                </div>	
            </div>

            <div class="tarjetas">
                <div class="card" id="card1" style="width: 18rem;">
                    
                    <div class="card-body">
                        <p class="card-text">Claro que quiero, me porte muy bien y se que me tocará algo bueno.  </p><br>
                        </div>
                        <a href="detalles.html"></a><button type="button" class="btn btn-outline-warning"> Aceptar Invitación </button>
                </div>
                <div class="card" id="card2" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-text">Grinch es mi primer nombre, no quiero nada, siempre me dan carbón. </p><br>
                        </div>
                        <a href="index.html"></a><button type="button" class="btn btn-outline-warning"> Rechazar Invitación </button>
                </div>
            </div>
            <br>

            <div class="tit-central">
                <div class="card" id="principal" style="height: 5rem;">
                    <div class="card-body" id="foot">
                        <p class="card-subtitle mb-2 text-muted">Tienes hasta la fecha DD/MM/AA para reponder esta solicitud</p>
                    </div>
                </div>	
            </div>	
        </div>
</template>
    <style type="text/css">
    .mi-navbar{
            background-color: #090f1d;
        }
    .back-img{
        background-image: url("../assets/img/normal.png");
        width: 100%;
        height: auto;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
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
    .FechaRegis{
        color:white;
        font-size: 1em;
    }
    .TextDescrip{
        color:white;
        font-size: 1.5em;
    }

    .Indication{
        color:white;
        font-size: 2em;
    }
    .pregunta{
        color:white;
        font-size: 1em;
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
        margin-top: 1em;
        margin-right: 3em;
        margin-left: 25%;
        
    }
    #card2{
        display: inline-block;
        margin-top: 1em;
        margin-right: 0.5em;
    }
    .tit-central{
        position: center;
        width: 50%;
        margin-bottom: 0.5em;
        margin-top: 1em;
        margin-left: 25%;
    }
    #principal{
        position: center;
        margin-bottom: 2em;
        text-align: center;
        
    }
    #prinB{
        position: center;
        text-align: center;
        font-size: 1.3em;
    }
    #foot{
        position: center;
        text-align: center;
        font-size: 0.9em;
    }
    .card-title{
        color:white;
        text-align: center;
        font-size: 1.7em;
    }
    .card-subtitle{
        color: white;
        text-align: center;
        font-size: 1.5em;
    }

    .parteInf{
        position: center;
        width: 50%;
        margin-bottom: 0.5em;
        margin-top: 2em;
        margin-left: 25%;
    }
    .card-text{
        text-align: justify;
        font-size: 1.3em;
        margin-top: 1em;
    }
    button{
        margin-top: 2em;
        margin-bottom: 2em;
        margin-left: 4em;
    }
    p{
        font-size: 0.5em;
    }
    </style>