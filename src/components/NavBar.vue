<template>
    <div class="navbarglobal">
        <nav class="navbar navbar-expand-lg navbar-dark mi-navbar">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav"  aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link to="/"><a class="nav-link">Inicio</a></router-link>
				</li>
				
				<li class="nav-item ">
					<router-link to="/agregaramigos"><a class="nav-link" >Añadir Amigos</a></router-link>
				</li>
			</ul>
			<ul class="navbar-nav">
					<li class="nav-item">
						<router-link to="registro"><a class="nav-link">Registrarse</a></router-link>
					</li>
					<li class="nav-item">
						<router-link to="login"><a class="nav-link" >Iniciar sesion</a></router-link>
					</li>
			</ul>
			</div>
		</nav>
    </div>
</template>
<style scoped>
	.mi-navbar{
		background-color: #090f1d;
	}
</style>