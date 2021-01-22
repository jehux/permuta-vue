<template>
  <div class="home">
    <div class="back-img">
        <div class="controls">
            <div class="title-1">Feliz Navidad</div>
            <div class="card"></div>
            <div class="boton"> <router-link to="/registroinvit"><button type="button" class="btn btn-warning">Comenzar Intercambio</button> </router-link></div>
            
            <div class="boton"> <router-link to="/visualizacionadmin"><button type="button" class="btn btn-warning">Intercambios Disponibles</button> </router-link></div>
            
            <div class="boton"> <router-link to="/ingresoinvit"><button type="button" class="btn btn-warning">Invitado de Honor</button> </router-link></div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
    .mi-navbar{
        background-color: #090f1d;
    }
    body{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: relative;
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
    .controls{
        position: relative;
    }
    .title-1{
        color: white;        
        font-size: 6rem;
        font-family: 'Dancing Script', cursive;
    }
    .boton{
        margin-top: 1em;
    }
</style>