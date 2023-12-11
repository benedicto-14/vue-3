<template>
    <h1>Directivas</h1>
    <br>
    <h2>v-if y v-model</h2>
    <p>Ingresa tu edad</p>
    <input type="text" v-model="edad">
    <div v-if="edad">
        <P v-if="edad > 18">Eres mayor de edad :)</P>
        <P v-else>Eres menor de edad :(</P>
    </div>

    <h2>v-bind style</h2>
    <p :style="{ backgroundColor:bg, color:letter, padding:padd }">probando bind style</p>

    <h2>v-bind class</h2>
    <p v-bind:class="{ 'success' ? hastError }"> mensaje enviado correctamente </p>

    <h2>v-for</h2>
    <h3>Ciudades</h3>
    <ul>
      <li v-for="item in countrys" :key="item">{{ item }}</li>  
    </ul>
    <h3>Books</h3>
    <div v-for="(book, index) in books" :key="index" :style="{ backgroundColor:'antiquewhite', padding:'10px 50px', margin:'20px' }">
        <br>
        <h4>{{ book.name }}</h4>
        <p>Año: {{ book.year }}</p>
        <span>{{ book.year }}</span>
        <br>
    </div>

</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    interface IBook {
        name:string,
        year:number,
        ocupation:string
    }

    let edad = ref(0);
    let hastError = true;
    let bg = 'gray';
    let letter = 'white'
    let padd = '20px';

    let countrys:Array<string> = ['Usa','Spain','Mexico','Brazil'];

    let books:Array<IBook> = [
        {
            "name": "Dune",
            "year": 1965,
            "ocupation": "writer"
        },
        {
            "name": "Ender's Game",
            "year": 1985,
            "ocupation": "writer"
        },
        {
            "name": "The Hitchhiker's Guide to the Galaxy",
            "year": 1979,
            "ocupation": "writer"
        },
        {
            "name": "1984",
            "year": 1949,
            "ocupation": "writer"
        },
        {
            "name": "Brave New World",
            "year": 1932,
            "ocupation": "writer"
        }
    ];

</script>

<style scoped>
    .success{
        font-size: 50px;
        color: green;
    }
</style>