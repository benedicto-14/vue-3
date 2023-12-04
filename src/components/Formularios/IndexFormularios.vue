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
                                        <th scope="col">Rol</th>
                                        <th scope="col">Materias</th>
                                        <th scope="col">Documentacion</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr v-if="personas.length === 0">
                                            <td colspan="6" :style="{textAlign:'center'}">sin registros</td>
                                        </tr>
                                        <tr v-for="(person,i) in personas" :key="i">
                                        <th scope="row">{{person.matricula}}</th>
                                        <td>{{person.name}}</td>
                                        <td>{{person.surname}}</td>
                                        <td>{{person.rol}}</td>
                                        <td><ul>
                                                <li v-for="(m,i) in person.materias" :key="i">{{ m }}</li>
                                        </ul></td>
                                        <td><div :class="person.doc ? 'btn btn-success' : 'btn btn-warning'">{{  person.doc ? 'entregado' : 'falta' }}</div></td>
                                        </tr>
                                </tbody>
                        </table>
                </section>
        </div>
</template>

<script lang="ts" setup>

        import {Ref,ref} from 'vue';

        interface IPersona{
                name:string,
                surname:string,
                rol:string,
                matricula:number,
                materias:Array<string>,
                doc:boolean
        }

        let teacher:Ref<IPersona> = ref({
                name:'',
                surname:'',
                rol:'',
                matricula:0,
                materias:[],
                doc:false
        });

        let personas:Ref<Array<IPersona>> = ref([]);
        
        let materia:Ref<string> = ref('');

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