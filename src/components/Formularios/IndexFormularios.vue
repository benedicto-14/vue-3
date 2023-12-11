<template>
        <h1>Formularios</h1>
        <div class="personas" :style="{margin:'50px 0px'}">
                <section :style="{width:'45%'}">
                        <h2>Añadir</h2>
                        <div class="d-flex">
                                <div class="mitad"><label class="form-label">Nombre:</label><input v-model="teacher.name" class="form-control" type="text"></div>
                                <div class="mitad"><label class="form-label">Apellidos:</label><input v-model="teacher.surname" class="form-control" type="text"></div>
                        </div>
                        <div class="d-flex">
                                <div class="mitad">
                                        <label class="form-label">Rol:</label>
                                        <select v-model="teacher.rol" class="form-select">
                                                <option disabled value="">Selecciona un rol</option>
                                                <option>Profesor</option>
                                                <option>Alumno</option>
                                                <option>Administrativo</option>
                                        </select>
                                </div>
                                <div class="mitad"><label class="form-label">Matricula:</label><input v-model="teacher.matricula" class="form-control" type="text"></div>
                        </div>
                        <div class="d-flex">
                                <div class="mitad">
                                        <label class="form-label">Materias:</label>
                                        <br>
                                        <input class="form-check-input" type="checkbox" value="sin materias" v-model="teacher.materias">
                                        <label for="sin materias">sin materias</label><br>
                                        <input class="form-check-input" type="checkbox" value="Español" v-model="teacher.materias">
                                        <label for="Español">Español</label><br>
                                        <input class="form-check-input" type="checkbox" value="Matematicas" v-model="teacher.materias">
                                        <label for="Matematicas">Matematicas</label><br>
                                        <input class="form-check-input" type="checkbox" value="Programacion" v-model="teacher.materias">
                                        <label for="Programacion">Programacion</label><br>
                                        <input class="form-check-input" type="checkbox" value="Ingles" v-model="teacher.materias">
                                        <label for="Ingles">Ingles</label><br>
                                        <input class="form-check-input" type="checkbox" value="Artes" v-model="teacher.materias">
                                        <label for="Artes">Artes</label>
                                </div>
                                <ul class="mitad">
                                        <li v-for="(m,i) in teacher.materias" :key="i">{{ m }}</li>
                                </ul>
                        </div>
                        <hr>
                        <div :style="{ padding: '0px 0px 10px 0px' }">
                                <input v-model="teacher.doc" class="form-check-input" type="checkbox"> Documentacion entregada
                        </div>
                        <button @click="addTeacher" class="btn btn-info" :style="{ color: 'white'}">Agregar</button>
                </section>
                <section :style="{width:'45%'}">
                        <h2>Lista</h2>
                        <table class="table">
                                <thead>
                                        <tr>
                                        <th scope="col">Matricula</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Detalles</th>
                                        <!-- <th scope="col">Rol</th>
                                        <th scope="col">Materias</th>
                                        <th scope="col">Documentacion</th> -->
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr v-if="personas.length === 0">
                                            <td colspan="6" :style="{textAlign:'center'}">sin registros</td>
                                        </tr>
                                        <PersonDetail v-for="(person,i) in personas" :key="i" :persona="person" @mostrarPersona="abrirModal"/>
                                </tbody>
                        </table>
                </section>
        </div>

        <!-- Modal -->
        <div ref="miModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                        <div class="modal-content">
                                <div class="modal-header bg-info" style="color: white;">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Información</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                        <h4>Nombre : {{ personaDetail.name }}</h4>
                                        <p>Apellido : {{ personaDetail.surname }}</p>
                                        <p>Matricula : {{personaDetail.matricula}}</p>
                                        <p>Rol : {{ personaDetail.rol }}</p>
                                        <p>Materias:</p>
                                        <ul>
                                                <li v-for="(materia,i) in personaDetail.materias" :key="i">{{materia}}</li>
                                        </ul>
                                        <p>Documentacion: <button :class="personaDetail.doc ? 'btn btn-success' : 'btn btn-danger'">{{  personaDetail.doc ? 'entregado' : 'falta' }}</button></p>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script lang="ts" setup>

        import {Ref,ref} from 'vue';
        import { IPersona } from '@/types';
        import PersonDetail from './PersonDetail.vue';

        let personaDetail:Ref<IPersona> = ref({
                name:'',
                surname:'',
                rol:'',
                matricula:0,
                materias:[],
                doc:false
        });

        let teacher:Ref<IPersona> = ref({
                name:'',
                surname:'',
                rol:'',
                matricula:0,
                materias:[],
                doc:false
        });

        let personas:Ref<Array<IPersona>> = ref([
                {
                        name: "John",
                        surname: "Doe",
                        matricula: 12345,
                        rol:'Alumno',
                        materias: ['Español','Matematicas','Programacion','Artes','Ingles'],
                        doc:true
                },
                {
                        name: "Jane",
                        surname: "Smith",
                        matricula: 67890,
                        rol:'Alumno',
                        materias: ['Español','Matematicas','Ingles'],
                        doc:false
                },
                {
                        name: "Michael",
                        surname: "Johnson",
                        matricula: 24680,
                        rol:'Profesor',
                        materias: ['Programacion'],
                        doc:true
                },
                {
                        name: "Emily",
                        surname: "Davis",
                        matricula: 13579,
                        rol:'Administrativo',
                        materias: ['Sin materias'],
                        doc:true
                },
                {
                        name: "David",
                        surname: "Brown",
                        matricula: 97531,
                        rol:'Alumno',
                        materias: ['Matematicas','Programacion','Ingles'],
                        doc:false
                }
        ]);

        const addTeacher = () => {
                if (
                        validation(teacher.value.matricula.toString().length)
                ) {
                        personas.value.push({
                                name:teacher.value.name,
                                surname:teacher.value.surname,
                                rol:teacher.value.rol,
                                matricula:teacher.value.matricula,
                                materias:teacher.value.materias,
                                doc:teacher.value.doc
                        });

                        teacher.value.name = ''
                        teacher.value.surname = ''
                        teacher.value.rol = '';
                        teacher.value.matricula = 0
                        teacher.value.materias = []
                        teacher.value.doc = false

                } else {
                        alert('La matricula debe tener 5 caracteres');
                }
        }

        const validation = (matricula:number) => {
                return matricula === 5  ? true : false;
        }

        const abrirModal = (person:IPersona) => {
                personaDetail.value = person;
        }
</script>

<style scoped>
        .personas{
                display: flex;
                justify-content: space-between;
        }
        .d-flex{
                display: flex;
                gap: 10px;
        }

        .mitad{
                width: 50%;
        }
</style>