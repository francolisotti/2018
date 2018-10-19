<template>
    <div id="fl-form">
        <h4>Ingresar nueva persona</h4>
        <h5>Nombre</h5>
        <input type="text" placeholder="Nombre" v-model="person.name" id="nombre" value="">
        <h5>Edad</h5>
        <input type="number" placeholder="Edad" v-model="person.age" id="age" value=0>
        <h5>Sexo</h5>
        <select id="sex" v-model="person.sex">
            <option selected="selected" value="Sexo" disabled>Sexo</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
        </select>
        <div v-if="errors.length" v-for="error in errors" :key="error">
            <br>{{ error }}
        </div>
        <br><br><button @click="agregar()">{{btn}}</button><br><br>
    </div>
</template>
<script>
    import PersonService from '@/services/personService'

    export default {
        name: "fl-form",
        data() {
            return {
                btn: "Agregar",
                person: {
                    id: 0,
                    name: "",
                    age: 0,
                    sex: "Sexo"
                },
                errors: []
            }
        },
        beforeMount() {
            this.checkStatus();
        },
        methods: {
            agregar() {
                this.errors = [];
                if ((this.person.age > 150 || this.person.age < 0)) {
                    this.errors.push("Edad invalida");
                }
                if (this.person.name == "") {
                    this.errors.push("Ingrese nombre");
                }
                if (this.person.sex == "Sexo") {
                    this.errors.push("Elija sexo");
                }
                if (this.errors.length == 0) {
                    if (this.btn == "Agregar") {
                        PersonService.addOne(this.person.name, this.person.age, this.person.sex);
                    } else {
                        PersonService.updateOne(this.person);
                        router.push("fl-form");
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