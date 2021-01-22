<template>
    <div class="back-img">
		<div class="Encabezado">
				<div class=Title> Bienvenido Invitado de Honor </div>
				<p class="pregunta"> ¿Tienes el códisanta santa secreto? </p>
		</div>
		<div class="datosIngred">
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label"> Ingrese el clave </label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Clave"></textarea>
				</div>
			<div class="controls">
				<div class="boton"> 
					<router-link to="/detalles"><button type="button" class="btn btn-lg btn-warning">  Ingresar  </button></router-link>
				</div>
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
        height: 100%;
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
    .datosIngred{
        position: relative;
    }
	.Title{
        color: white;        
        font-size: 4rem;
        font-family: 'Dancing Script', cursive;
        position: relative;
        text-align: center;
        
    }
    .pregunta{
        color:white;
        font-size: 2em;
        text-align: center;
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
        font-size: em;    
        position: relative;
        }
    .form-label{
        color: white;
    }
	.controls{
		float:right
	}
</style>