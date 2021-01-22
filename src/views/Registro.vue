<template>
    <div class="back-img">
			<div class="d-flex justify-content-center h-100">
				<div class="card">
					<div class="card-header">
						<h3>Registro</h3>
					</div>
					<div class="card-body">
						<form>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="name" v-model.trim="form.nombre">
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="username" v-model.trim="form.alias">
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="email" class="form-control" placeholder="email" v-model.trim="form.email">
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" placeholder="password" v-model.trim="form.password">
							</div>

							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" placeholder="password confirm" >
							</div>
							
							<div class="form-group">
								<input type="submit" value="Crear Cuenta" @submit="setUsuario" class="btn float-right login_btn">
							</div>
						</form>
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
        form: {
			idusuario:Math.random() * (100 - 0),
			nombre:'',
			email:'',
			alias:'',
			password:'',

		}
      }

    },
    methods:{
        setUsuario(){
            const path="http://13292f66d585.ngrok.io/api/v1.0/usuario/"
            axios.post(path,this.form).then((response ) =>{
                this.usuariosAmigos = response.data
            }).catch((error) =>{
                console.log(error)
            })
        },
        
    },
    created(){
        
    }
  }
</script>
<style scoped>
	.mi-navbar{
        background-color: #090f1d;
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
	.Title{
        color: white;        
        font-size: 4rem;
        font-family: 'Dancing Script', cursive;
    }
	.formulario{
		position: relative;	
		width: 50%;
		margin-top: -10rem;
	}
	
	.form-label{
		color: white;
    }

	.container{
height: 100%;
align-content: center;
}

.card{
height: 31em;
margin-top: 2.5em;
margin-bottom: auto;
width: 27em;
background-color: rgba(0,0,0,0.5) !important;
}


.card-header h3{
color: white;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;


}

.input-group {
margin-bottom: 2em;

}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 200px;
margin-top: 1em;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>