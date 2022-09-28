<template>
    <section id="pantalla-dividida">
        <div class="izquierda">
            <div class="logIn_user">
                <div class="contenido_logIn_user">
                    <img class="logo" src="http://drive.google.com/uc?export=view&id=10esmGfVLdrKg-d_xsGhXBzy8gJpYleUX">
                    <h2>Registros de Usuarios</h2>
                    <form class="forma" v-on:submit.prevent="registroUsuario">
                        <input type="text" v-model="usuario.nombre" placeholder="Nombre"><br>
                        <input type="text" v-model="usuario.apellido" placeholder="Apellido"><br>
                        <input type="text" v-model="usuario.cedula" placeholder="Cedula"><br>
                        <input type="text" v-model="usuario.direccion" placeholder="Direccion"><br>
                        <input type="text" v-model="usuario.correo" placeholder="Correo"><br>
                        <input type="text" v-model="usuario.telefono" placeholder="Telefono"><br>
                        <input type="text" v-model="usuario.user_name" placeholder="Username"><br>
                        <input type="text" v-model="usuario.password" placeholder="Password"><br>
                        <select v-model="usuario.id_rol" placeholder="Rol">
                            <option value="">Seleccione el rol del Usuario...</option>
                            <option value="1">Administrador</option>
                            <option value="2">Auxiliar</option>
                            <option value="3">Paciente</option>
                            <option value="4">Familiar</option>
                            <option value="5">Medico</option>
                            <option value="6">Enfermero</option>
                            
                        </select><br><br>
                        <button type="submit">Registrarse</button>
                    </form>
                    <h5>Mintic Equipo 4<br>Todos los derechos reservados - 2022</h5>
                </div>
            </div>
        </div>
        <div class="derecha">
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'registro',
    data: function () {
        return {
            usuario: {
                nombre: "",
                apellido: "",
                cedula: "",
                direccion: "",
                correo: "",
                telefono: "",
                user_name: "",
                password: "",
                id_registro: "1",
            }
        }
    },
    methods: {
        registroUsuario: function (event) {
            const url = "http://127.0.0.1:8000/user/";
            axios.post(url, this.usuario)
                .then((result) => {
                    alert("Registro Exitoso: " + result.status);
                    event.target.reset();
                })
                .catch((error) => {
                    alert("ERROR: Fallo en el registro: " + error);
                });
        }
    },
}
</script>
  
<style>
body {
    margin: 0 0 0 0;
}
.izquierda {
    background: white;
    width: 40%;
    height: 100vh;
}
.derecha {
    background: url(https://img.freepik.com/foto-gratis/mujer-control-medico-tiro-medio_23-2148934323.jpg?w=740&t=st=1663884692~exp=1663885292~hmac=30756a7d1fe43ce5c5d0c5ada5689417d090a3847567d1935f154331194f79ca);
    background-size: cover;
    width: 60%;
    height: 100vh;
}
#pantalla-dividida {
    display: flex;
}
.logo {
    width: 40%;
}
.logIn_user {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contenido_logIn_user {
    border: 2px solid #283747;
    border-radius: 20px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
}
.logIn_user button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border-radius: 5px;
    padding: 0px 0px;
    margin: 0px 0px;
}
.contenido_logIn_user h5 {
    text-align: center;
}
.forma input{
    width: 100%;
}
select{
    width: 100%;
}
</style>