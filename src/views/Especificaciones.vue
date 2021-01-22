<template>
    <div class="back-img">
        <div class=Title> Seamos claros... </div>
		<div class="costo-prefencias">
			<div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Costo</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Valor numerico"></textarea>
			</div>
			<div class="mb-3">
				<br><p class="Indication"> Selecciona los 3 temas para el intercambio </p>
				<label for="exampleFormControlTextarea1" class="form-label">Tema 1 de regalo</label>
				<select class="form-select form-select-sm" aria-label=".form-select-sm example" rows="1">
                    <option selected>Ver opciones de selección</option>
                    <option value="1">Libros</option>
                    <option value="2">Juguetes</option>
                    <option value="3">Ropa</option>
                    <option value="4">Gadgets</option>
                    <option value="5">Licores</option>
                    <option value="6">Accesorios</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Tema 2 de regalo</label>
				<select class="form-select form-select-sm" aria-label=".form-select-sm example" rows="1">
                    <option selected>Ver opciones de selección</option>
                    <option value="1">Libros</option>
                    <option value="2">Juguetes</option>
                    <option value="3">Ropa</option>
                    <option value="4">Gadgets</option>
                    <option value="5">Licores</option>
                    <option value="6">Accesorios</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Tema 3 de regalo</label>
				<select class="form-select form-select-sm" aria-label=".form-select-sm example" rows="1">
                    <option selected>Ver opciones de selección</option>
                    <option value="1">Libros</option>
                    <option value="2">Juguetes</option>
                    <option value="3">Ropa</option>
                    <option value="4">Gadgets</option>
                    <option value="5">Licores</option>
                    <option value="6">Accesorios</option>
				</select>
			</div>
		</div>
		<div class="Fechas-Mensaje">
			<div class="mb-3"><br>
				<div class="form-group row">
					<label for="example-datetime-local-input" class="col-2 col-form-label">Fecha Registro</label>
					<div class="col-10">
                        <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
                    </div>
                    </div>
                    <br>
                    <div class="form-group row">
                    <label for="example-datetime-local-input" class="col-2 col-form-label">Fecha Intercambio</label>
                    <div class="col-10">
                        <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
                    </div>
                    </div>
                <br><br><label for="exampleFormControlTextarea1" class="form-label">¿Cual es tu deseo navideño?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Escribe un mensaje para que lo puedan leer los participantes"></textarea>
            </div>
        </div>
        <div class="controls">
            <div class="boton"> 
                <router-link to="/registroinvit"><button type="button" class="btn btn-warning">  Regresar  </button></router-link>
                <router-link to="/statusinvit"><button type="button" class="btn btn-warning">Continuar</button></router-link>
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
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../assets/img/normal.png");
		width: 100%;
        height: auto;
        position: absolute;
        z-index: 1;
        padding: 3em;
    
    }
	.back-img:before {
        content:'';
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        width:100%;
        height:100%;
        
        
    }
	.formulario{
		position: relative;
	}
	body{
        background-repeat: no-repeat;
        background-size: cover;
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
        font-size: 1.5em;
    }
    .costo-prefencias{
        float:left;
        padding:2em;
        width:45%
    }
    .Fechas-Mensaje{
        float:right;
        padding:2em;
        width:45%
    }
    .form-label{
        color: white;
    }
    .controls{
        float:right;
        padding:4em;
    }
    .SeleccionOp{
        float:left;
        width:100%
    }
    .form-select{
        float:right;
        padding:1em;
        width:100%
    }
	label{
		color: white;
		text-align: center;
	}
</style>