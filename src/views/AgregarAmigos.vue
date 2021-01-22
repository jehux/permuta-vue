<template>
        <div class="back-img">
			<div class="formularios">
				<div class=Title> Agregar amigos ☻</div>
				
				<div class="invitados">
					<p class="Indication"> Amigo... </p>
					<div class="mb-3">
						<label for="exampleFormControlTextarea1" class="form-label">Nombre del Amigo</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Nombre y apellido"></textarea>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Correo Electronico</label>
						<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="CorreoAmigo@ejemplo.com">
					</div>
					
				<div class="controls">
					<div class="boton"> 
						<router-link to="/"><button type="button" class="btn btn-warning">Regresar</button></router-link>
                        <button type="button" class="btn btn-warning">Registrar</button>
					</div>
				</div>
			</div>
		</div>
        </div>

</template>

<style scoped>
	.mi-navbar{
        background-color: #090f1d;
    }

	body{
        background-repeat: no-repeat;
        background-size: cover; 
        background-attachment: fixed;
        background-position:center;
        width:100%;
        height: 100%;
    }
	.back-img{
		width: 100%;
        height: 100%;background-image: url("../assets/img/normal.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
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
	.formularios{
		position: relative;
        float: center;
        width:100%;
	}
	.Title{
        color: white;        
        font-size: 4rem;
        font-family: 'Dancing Script', cursive;
        position: relative;
        text-align: center;
    }
    .Indication{
    color:white;
    font-size: 2em;
    }
    .invitados{
    float:left;
    padding:2em;
    margin-left: 13em;
    width:65%;
    align-self: center;
    }

    .form-label{
        color: white;
    }
    .controls{
        float:right;
        padding:2em;
    }
     button{
        margin-left: 1em;
    }
</style>