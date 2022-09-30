<template>
    <section id="pantalla-dividida">
        <div class="izquierda_4">
            <div class="asignar">
                <div class="contenido_asignar">
                    <img class="logo" src="http://drive.google.com/uc?export=view&id=10esmGfVLdrKg-d_xsGhXBzy8gJpYleUX">
                    <h2>Registros de Usuarios</h2>
                    <form class="forma_4" v-on:submit.prevent="registroUsuario">
                        <input type="text" v-model="asignar_medico.id_paciente" placeholder="Id Paciente"><br>
                        <input type="text" v-model="asignar_medico.id_medico" placeholder="Id Medico"><br>
                        <input type="text" v-model="asignar_medico.fecha_inicio" placeholder="Fecha Inicio"><br>
                        <input type="text" v-model="asignar_medico.fecha_fin" placeholder="Fecha Fin"><br>
                        <button type="submit">Asignar</button>
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
    name: 'AsignarMedico',
    data: function () {
        return {
            asignar_medico: {
                id: "",
                fecha_inicio: "",
                fecha_fin: "",
                id_paciente: "",
                id_medico: "",
                id_rol: "",
            }
        }
    },
    methods: {
        registroUsuario: function (event) {
            const url = "http://127.0.0.1:8000/paciente-personal-salud/";
            axios.post(url, this.asignar_medico).then((result) => {
                //alert("Asignación Exitosa: " + result.status);
            })
            .catch((error) => {
                alert("ERROR: ID no registrado / ID no corresponde a un medico" + error);
            });
            event.target.reset();
        },
    }
}
</script>
  
<style>
body {
    margin: 0 0 0 0;
}
.izquierda_4 {
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
.asignar {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contenido_asignar {
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
.asignar button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border-radius: 5px;
    padding: 0px 0px;
    margin: 0px 0px;
}
.contenido_asignar h5 {
    text-align: center;
}
.forma_4 input{
    width: 100%;
}
select{
    width: 100%;
}
</style>