<template>
    <div class="back-img">
		<div class=Title> ¡Bienvenido Santa creador! </div>
			<div class="tit-central">
				<div class="card" id="principal">
                    <div class="card-body" id="prinB">
                        <h5 class="card-title">Tienes estos intercambios pendientes</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Selecciona cual es el que quieres consultar</h6>
                    </div>
				</div>	
			</div>
			<div class="table-responsive">
                <div class="Tab-AP">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Clave de intercambio </th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                        <td>J8K5E22</td>
                                        <td><router-link to="statusinvit"> <button type="button" class="btn btn-outline-light"> Acceder </button> </router-link> <button type="button" class="btn btn-outline-danger ml-4"> Eliminar </button></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
		</div>
	</div>
</template>

<style scoped>
	.mi-navbar{
			background-color: #090f1d;
		}
	.Title{
		color: white;        
		font-size: 3rem;
		font-family: 'Dancing Script', cursive;
	}
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
    .card-title{
    color:white;
    text-align: center;
    font-size: 1.5em;
    }
    .card-subtitle{
    color: white;
		text-align: center;
		font-size: 0.7em;
    }
    .Title{
        color: white;        
        font-size: 4rem;
        font-family: 'Dancing Script', cursive;
        position: relative;
        text-align: center;
        
    }
    .Tab-AP{
        margin-top: 1em;
        width:50%;
        position: relative;
        left:25%;
        
    }
    .table{
        margin-top: 2em;
        padding: 1em;
        width:100%;
    }
    td{
        color: white;
    }
    th{
        color: white;
    }
    .controls{
        float: right;
        padding:4em;
        margin-right: 42%;
    }
</style>