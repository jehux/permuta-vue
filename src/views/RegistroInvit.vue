<template>
    <div class="back-img">
			<div class="formularios">
				<div class=Title> Seleccion de Invitados ☻</div>
				<div class="invitados">
					<p class="Indication"> Lista de amigos </p>
					<div class="select-AP">
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" rows="1">
                            <option selected>Ver opciones de selección</option>
                            <option value="1"> Jehu </option>
                            <option value="2"> Karly </option>
                            <option value="3"> Erick </option>
                        </select>
                    </div>
                    
                    <div class="Tab-AP">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">      </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in usuariosAmigos" :key="item.id">
                                    <th scope="row">1</th>
                                        <td>{{item.nombre}}</td>
                                        <td>{{item.email}}</td>
                                        <td> <button type="button" v-on:click="deleteOfList(item)" class="btn btn-outline-danger"> Eliminar </button> </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
				</div>
				<div class="controls">
					<div class="boton"> 
						<router-link to="/especificaciones"><button type="button" class="btn btn-warning">Continuar</button></router-link>
                        <button type="button" v-on:click="addAmigo()" class="btn btn-warning">Continuar</button>
					</div>
				</div>
            
            
			</div>
		</div>
</template>
<script>
 import axios from'axios'

  export default {
    data() {
      return {
        usuariosAmigos: []
      }

    },
    methods:{
        getAmigos(){
            const path="http://13292f66d585.ngrok.io/api/v1.0/usuario/"
            axios.get(path).then((response ) =>{
                this.usuariosAmigos = response.data
            }).catch((error) =>{
                console.log(error)
            })
        },
        deleteOfList(item){
            const index = this.usuariosAmigos.indexOf(item);
            if (index > -1) {
            this.usuariosAmigos.splice(index, 1);
            }
        }
    },
    created(){
        this.getAmigos()
    }
  }
</script>

<style scoped>
	.mi-navbar{
        background-color: #090f1d;
        position: sticky;
        top:0;
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
        height: 100%;
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
	.formularios{
		width:100%;
        position: relative;
        padding: 2em;
        
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
        text-align: center;
    }
    .invitados{
        padding:2em;
        width:100%;
        
    }
    .form-label{
        color: white;
    }
    .controls{
        position: absolute;
        padding:4em;
        top:58%;
        left:58%;

        
    }
    .form-select{
        padding:1em;
        width:70%
    }
    .select-AP{
        margin-top: 1em;
        margin-bottom: 2em;
        padding: 1em;
        width:50%;
        position: absolute;
        top: 65%;
        left:25%;
        
    }
    .Tab-AP{
        margin-top: 1em;
        width:50%;
        position: absolute;
        top:85%;
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

</style>