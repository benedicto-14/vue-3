<template>
    <tr>
        <th scope="row">{{persona.matricula}}</th>
        <td>{{persona.name}}</td>
        <td>{{persona.surname}}</td>
        <td><div class="btn btn-primary" @click="mostrar" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mas</div></td>
    </tr>
</template>

<script lang="ts" setup>
import {defineProps,defineEmits} from 'vue';
import { IPersona } from '@/types';

let p = defineProps<{persona:IPersona}>();
const emit = defineEmits(['mostrarPersona']);

const mostrar = () => {
    emit("mostrarPersona",p.persona);
}

</script>