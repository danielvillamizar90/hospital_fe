import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Registro from './components/Registro.vue'
import ConsultaRegistro from './components/ConsultaRegistro.vue'
import ConsultaPaciente from './components/ConsultaPaciente.vue'

const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/registro',
        name: "registro",
        component: Registro
    },
    {
        path: '/user/consultapaciente',
        name: "consultapaciente",
        component: ConsultaPaciente
    },
    {
        path: '/user/consultaregistro',
        name: "consultaregistro",
        component: ConsultaRegistro
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router