<template>
    <div class="login">
        <div class="back-img">
			<div class="d-flex justify-content-center h-100">
				<div class="card">
					<div class="card-header">
						<h3>Iniciar Sesión</h3>
					</div>
					<div class="card-body">
						<form>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="Usuario">
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" placeholder="Contraseña">
							</div>
							
							<div class="form-group">
								<input type="submit" value="Login" class="btn float-right login_btn">
							</div>
						</form>
					</div>
					<div class="card-footer">
						<div class="d-flex justify-content-center links">
							¿No tienes cuenta?<a href="Registro.html">Registrarse</a>
						</div>
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
	.back-img{
        background-image: url("../assets/img/normal.png");
        /*background-color: brown;*/
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        text-align: center;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .back-img:before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.3);
    }

	.card{
	height: 18rem;
	margin-top: 10%;
	margin-bottom: auto;
	width: 27rem;
	background-color: rgba(0,0,0,0.3) !important;
	}

	.social_icon span{
	font-size: 60px;
	margin-left: 10px;
	color: #FFC312;
	}

	.social_icon span:hover{
	color: white;
	cursor: pointer;
	}

	.card-header h3{
	color: white;
	}

	.social_icon{
	position: absolute;
	right: 20px;
	top: -45px;
	}

	.input-group-prepend span{
	width: 50px;
	background-color: #FFC312;
	color: black;
	border:0 !important;
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
	width: 100px;
	}

	.login_btn:hover{
	color: black;
	background-color: white;
	}

	.links{
	color: white;
	}

	.links a{
	margin-left: 4px;}
</style>