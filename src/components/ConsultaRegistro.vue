<template>
    <!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />-->

    <section id="pantalla-dividida">
        <div class="izquierda_2">
            <div class="botones_laterales">
                <div class="boton_consultar_paciente_registrado">
                    <button v-on:click="Link_Consultar_Registrado">Consultar Registrado</button>
                </div>

                <div class="boton_consultar_paciente">
                    <button>Consultar Paciente</button>
                </div>

                <div class="boton_asignar_medico">
                    <button>Asignar Medico</button>
                </div>

                <div class="boton_asignar_enfermero">
                    <button>Asignar Enfermero</button>
                </div>
            </div>
        </div>
        <div class="derecha_2">
            <div class="marco_2">
                <input type="text" v-model="registro.cedula_consulta" placeholder=" Cedula del paciente">
                <form class="forma_2" v-on:submit.prevent="consultaPacienteRegistrado">
                    <div class="boton_lateral_2">
                        <div class="boton_consultar_paciente_registrado">
                            <button type="submit">Consultar</button>
                        </div>
                    </div>
                </form>
                <div class="consulta_paciente">
                    <table v-if="consulta_paciente">
                        <tr>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Apellido</strong></th>
                            <th><strong>Cedula</strong></th>
                            <th><strong>Direccion</strong></th>
                            <th><strong>Correo</strong></th>
                            <th><strong>Telefono</strong></th>
                            <th><strong>Rol</strong></th>
                            <th><strong>Fecha de creación</strong></th>
                            <th><strong>Medico Asignado</strong></th>
                            <th><strong>Familiar Asignado</strong></th>
                        </tr>

                        <tr>
                            <td>{{registro.nombre}}</td>
                            <td>{{registro.apellido}}</td>
                            <td>{{registro.cedula}}</td>
                            <td>{{registro.direccion}}</td>
                            <td>{{registro.correo}}</td>
                            <td>{{registro.telefono}}</td>
                            <td v-if="paciente">Paciente</td>
                            <td>{{registro.fecha_registro}}</td>
                            <td v-text="nombre_medico"></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios';
export default {
    name: 'ConsultaPaciente',

    data: function () {
        return {
            registro: {
                nombre: "",
                apellido: "",
                cedula: "",
                direccion: "",
                correo: "",
                telefono: "",
                id_rol: "",
                fecha_registro: "",
            },
            consulta_paciente: false,

            //lista de la segunda consulta
            lista: [{
                id: "",
                fecha_inicio: "",
                fecha_fin: "",
                id_paciente: "",
                id_medico: "",
            }],
            nombre_medico: "",
        }
    },

    methods: {
        consultaPacienteRegistrado: function () {
            const url = "http://127.0.0.1:8000/usuario/" + this.registro.cedula_consulta + "/";
            axios.get(url).then((result) => {
                this.registro.cedula_consulta = "";
                this.registro.id_rol = result.data.id_rol;
                if (this.registro.id_rol == "3") {
                    this.registro.nombre = result.data.nombre;
                    this.registro.apellido = result.data.apellido;
                    this.registro.cedula = result.data.cedula;
                    this.registro.direccion = result.data.direccion;
                    this.registro.correo = result.data.correo;
                    this.registro.telefono = result.data.telefono;
                    this.registro.fecha_registro = result.data.fecha_registro;
                    this.paciente = true;
                } else {
                    this.registro.nombre = "";
                    this.registro.apellido = "";
                    this.registro.cedula = "",
                    this.registro.direccion = "";
                    this.registro.correo = "";
                    this.registro.telefono = "",
                    this.registro.fecha_registro = "";
                    this.paciente = false;
                    alert("ERROR: El ID ingresado no corresponde a un Paciente ");
                }
                this.consulta_paciente = true;

                // segunda consulta

            const url_2 = "http://127.0.0.1:8000/paciente-personal-salud_view/";
            axios.get(url_2).then((result) => {
                
                this.lista = result.data;
                for(var i = 0; i < this.lista.length; i++){
                    if(this.lista[i].id_paciente == this.registro.cedula) {
                        
                        this.nombre_medico = this.lista[i].id_medico;

                    }else {
               
                        this.nombre_medico = "";

                    }
                }
            })

            })

            .catch((error) => {
                alert("ERROR: Paciente no registrado " + error);
                this.registro.nombre = "";
                this.registro.apellido = "";
                this.registro.cedula = "",
                this.registro.direccion = "";
                this.registro.correo = "";
                this.registro.telefono = "",
                this.registro.fecha_registro = "";
                this.paciente = false;
                this.nombre_medico = "";
            });
        },

        Link_Consultar_Registrado: function () {

            this.$router.push('/user/consultaregistro')

        },
    }
}
</script>


<style>
body {
    margin: 0 0 0 0;
}

.izquierda_2 {
    background: white;
    width: 20%;
    height: 100vh;
}

.botones_laterales button {
    width: 100%;
    height: 60px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #283747;
    border-radius: 0px;
    padding: 0px 0px;
    margin: 0px 0px;
}

.botones_laterales button:hover {
    background: #052443;
}

.derecha_2 {
    background: url(https://img.freepik.com/foto-gratis/mujer-control-medico-tiro-medio_23-2148934323.jpg?w=740&t=st=1663884692~exp=1663885292~hmac=30756a7d1fe43ce5c5d0c5ada5689417d090a3847567d1935f154331194f79ca);
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin: 0px 0px;
}

.marco_2 {
    border: 2px solid #283747;
    border-radius: 10px;
    width: 80%;
    height: auto;
    background: white;
    padding: 20px 0px;
    margin: 50px 100px;
}

.marco_2 input {
    width: 20%;
    height: 8%;
    border: 2px solid #283747;
    border-radius: 3px;
    background: white;
    padding: 0px 0px;
    margin: 20px 340px;
}

.marco_2 button {
    width: 10%;
    height: 8%;
    border: 2px solid #283747;
    color: #E5E7E9;
    border-radius: 3px;
    background: #052443;
    padding: 0px 0px;
    margin: 20px 380px;
}

.consulta_paciente table {
    overflow: scroll;
    height: auto;
    width: 770px;
    padding: 0px 0px;
    margin: 30px 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border: 1px solid black;
    border-spacing: 0;
}

.consulta_paciente table td {
    border: 1px solid black;
}

.consulta_paciente table th {
    border: 1px solid black;
}

.forma_2 input {
    width: 100%;
}
</style>