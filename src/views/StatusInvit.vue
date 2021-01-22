<template>
    <div class="back-img">
		<div class=Title> Lista de santa </div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card" id="card1" >
                        <div class="card-body">
                            <h5 class="card-title">Clave del Intercambio</h5>
                            <h5 class="card-subtitle mb-2 text-muted">J9E8K5IM</h5>
                        </div>
                    </div>
                    <div class="controls">
                        <div class="boton">                     
                                <router-link to="/detalles"><button type="button" class="btn btn-warning">Soy santa secreto de...</button></router-link>
                                
                                <router-link to="/"><button type="button" class="btn btn-warning" id="der">Finalizar</button></router-link>                    
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card" id="card2" >
                        <div class="card-body">
                            <h5 class="card-title">Lista de Invitados</h5>
                            <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                    <td>Jehu</td>
                                                    <td>Negado</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                    <td>Karly</td>
                                                    <td>Pendiente</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                    <td>Erick</td>
                                                    <td>Aceptado</td>
                                                    
                                                </tr>
                                        </tbody>
                                    </table>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>
			
		</div>
    </div>
</template>
<style scoped>
    .back-img{
		background-image: url("../assets/img/normal.png");
        /*background-color: brown;*/
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: 1;
        padding: 3em;
    }
    @media screen and (max-width: 400px) {
        .back-img{
            height: auto;
        }
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
    
	.Title{
        color: white;        
        font-size: 4rem;
        font-family: 'Dancing Script', cursive;
        position: relative;
		text-align: center;
    }
	.container{
		color:white;
		text-align: center;
        
	}
    .Indication{
        color:white;
    }
    
    .form-label{
        color: white;
    }
	.card{
        background-color: rgba(0,0,0,0.3);
    }
    .tarjetas{
        display: flex;
		position: absolute;
		width: 100%;
		margin-bottom: 1px;
        background-color:brown;
    }
    .card-text{
        color: white;
    }
    .card-body{
        color: rgba(100,100,100,100.3);
    }
    #card1{
        width: auto;
    }
	
    #card2{
        width: auto;
    }
    #principal{
        position: center;
        margin-bottom: 2em;
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
	
    .controls{
        position:right;
        padding:1em;
		margin-left: auto;
        
    }

	button{
         margin-left:1em;
    }
	
	td{
        color: white;
    }
    th{
        color: white;
    }

</style>