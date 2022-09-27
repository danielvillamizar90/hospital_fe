<template>
    <!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />-->

    <section id="pantalla-dividida">
        <div class="izquierda_3">
            <div class="botones_laterales_3">
                <div class="boton_consultar_paciente_registrado_·">
                    <button v-on:click="Consultar_Registrado">Consultar Registrado</button>
                </div>

                <div class="boton_consultar_paciente_3">
                    <button v-on:click="Link_Consultar_Paciente">Consultar Paciente</button>
                </div>

                <div class="boton_asignar_medico_3">
                    <button>Asignar Medico</button>
                </div>

                <div class="boton_asignar_enfermero_3">
                    <button>Asignar Enfermero</button>
                </div>
            </div>
        </div>
        <div class="derecha_3">
            <div class="marco_3">
                <form class="forma_3" v-on:submit.prevent="agregarlista">
                    <div class="boton_lateral_3">
                        <div class="boton_consultar_pacientes_registrado">
                            <button type="submit">Consultar</button>
                        </div>
                    </div>
                </form>
                <div class="consulta_registro">
                    <table>
                        <tr>
                            <th><strong>Id</strong></th>
                            <th><strong>User Name</strong></th>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Apellido</strong></th>
                            <th><strong>Direccion</strong></th>
                            <th><strong>Correo</strong></th>
                            <th><strong>Fecha de creación</strong></th>
                            <th><strong>Estado</strong></th>
                            <th><strong>Rol</strong></th>
                        </tr>

                        <tr v-for="item in lista">
                            <td v-text="item.id"></td>
                            <td v-text="item.user_name"></td>
                            <td v-text="item.nombre"></td>
                            <td v-text="item.apellido"></td>
                            <td v-text="item.direccion"></td>
                            <td v-text="item.correo"></td>
                            <td v-text="item.create_date"></td>
                            <td v-text="item.activo"></td>
                            <td v-text="item.id_rol"></td>
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
    name: 'ConsultaRegistro',

    data: function () {
        return {
            lista: [{
                id: "",
                user_name: "",
                nombre: "",
                apellido: "",
                direccion: "",
                correo: "",
                create_date: "",
                activo: "",
                id_rol: "",
            }],
        }
    },

    methods: {

        agregarlista: function () {

            const url = "http://127.0.0.1:8000/pacientes/";
            axios.get(url).then((result) => {
                this.lista = result.data;
            })
        },

        Link_Consultar_Paciente: function () {
            this.$router.push('/user/consultapaciente')
        },
    }

}
</script>


<style>
body {
    margin: 0 0 0 0;
}

.izquierda_3 {
    background: white;
    width: 20%;
    height: 100vh;
}

.derecha_3 {
    background: url(https://img.freepik.com/foto-gratis/mujer-control-medico-tiro-medio_23-2148934323.jpg?w=740&t=st=1663884692~exp=1663885292~hmac=30756a7d1fe43ce5c5d0c5ada5689417d090a3847567d1935f154331194f79ca);
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin: 0px 0px;
}

.marco_3 {
    border: 2px solid #283747;
    border-radius: 10px;
    width: 80%;
    height: auto;
    background: white;
    padding: 0px 0px;
    margin: 50px 100px;
}

.marco_3 button {
    width: 10%;
    height: 8%;
    border: 2px solid #283747;
    color: #E5E7E9;
    border-radius: 3px;
    background: #052443;
    padding: 0px 0px;
    margin: 20px 380px;
}

.botones_laterales_3 button {
    width: 100%;
    height: 60px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #283747;
    border-radius: 0px;
    padding: 0px 0px;
    margin: 0px 0px;
}

.botones_laterales_3 button:hover {
    background: #052443;
}

.consulta_registro {
    height: 400px;
    width: 810px;
    overflow: scroll;
    margin: 5px 5px;
}

.consulta_registro table {
    height: auto;
    width: 770px;
    padding: 0px 0px;
    margin: 0px 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border: 1px solid black;
    border-spacing: 0;
}

.consulta_registro table td {
    border: 1px solid black;
}

.consulta_registro table th {
    border: 1px solid black;
}
</style>