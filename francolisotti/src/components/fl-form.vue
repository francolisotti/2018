<template>
    <div id="fl-form">
        
        <el-form label-position="left" label-width="200px">
            <el-form-item label="Nombre">
                <el-input type="text" placeholder="Nombre" v-model="person.name" id="nombre" value=""></el-input>
            </el-form-item>
            <el-form-item label="Edad">
                <el-input type="number" placeholder="Edad" v-model="person.age" id="age" value=0></el-input>
            </el-form-item>
            <el-form-item label="Sexo">
                <el-select id="sex" v-model="person.sex">
                    <el-option selected value="Sexo" disabled></el-option>
                    <el-option value="Femenino">Femenino</el-option>
                    <el-option value="Masculino">Masculino</el-option>
                </el-select>
            </el-form-item>

            <div v-if="errors.length" v-for="error in errors" :key="error">
                <br>
                <el-alert title="" type="error">{{error}}
                </el-alert>
            </div>
            <div v-if="successes.length" v-for="success in successes" :key="success">
                <br>
                <el-alert title="" type="success">{{success}}
                </el-alert>
            </div>
            <br><br>
            <el-button type="primary" @click="agregar()">{{btn}}</el-button><br><br>
        </el-form>
    </div>
</template>
<script>
    import PersonService from '@/services/personService'
    import router from '../router.js'

    export default {
        name: "fl-form",
        data() {
            return {
                btn: "Agregar",
                person: {
                    id: 0,
                    name: "",
                    age: 0,
                    sex: "Elija sexo"
                },
                errors: [],
                successes: []
            }
        },
        beforeMount() {
            this.checkStatus();
        },
        methods: {
            agregar() {
                this.errors = [];
                this.successes = [];
                if ((this.person.age > 120 || this.person.age < 0)) {
                    this.errors.push("Edad invalida");
                }
                if (this.person.name == "") {
                    this.errors.push("Ingrese nombre");
                }
                if (this.person.sex == "Elija sexo") {
                    this.errors.push("Elija sexo");
                }
                if (this.errors.length == 0) {
                    if (this.btn == "Agregar") {
                        PersonService.addOne(this.person.name, this.person.age, this.person.sex);
                        this.successes.push("Persona agregada correctamente");

                    } else {
                        PersonService.updateOne(this.person);
                        router.push("/");
                    }
                    this.person.name = "";
                    this.person.age = 0;
                    this.person.sex = "Sexo";
                }
            },

            checkStatus() {
                if (this.$route.params.id !== undefined) {
                    this.btn = "Actualizar";
                    PersonService.getOne(this.$route.params.id)
                        .then((person) => {
                            this.person = person;
                        })
                        .catch((err) => {
                            this.errors.push(err);
                        });
                }
            },
        }
    }
</script>
<style>
    #fl-form {
        text-align: right;
        width: 400px;
        margin-top: 10px
    }
</style>