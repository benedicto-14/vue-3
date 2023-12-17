import { ref } from "vue";

export default class RickApi {

    private url = 'https://rickandmortyapi.com/api/character/?page=';
    private posts;

    constructor(){
        this.posts = ref([]);
    }
    
    getPosts(){
        return this.posts;
    }

    async fetchAll(numero:string){
        try {
            const res = await fetch(this.url+numero);
            const json = await res.json();
            this.posts.value = await json.results;
        } catch (error) {
            console.error(error);
        }
    }
}
