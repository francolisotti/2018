<template>
    <div id="fl-form">
        <h4>Ingresar nueva persona</h4>
        <h5>Nombre</h5>
        <input @input="nameChanged" type="text" :name="persona.name" placeholder="Nombre" id="idName">
        <h5>Edad</h5>
        <input @input="ageChanged" type="number" :age="persona.age" placeholder="Edad" id="idAge">
        <h5>Sexo</h5>
        <input @change="sexChanged" type="radio" value="Femenino" :sex="persona.sex">
        <label type="text" for="one">Femenino</label>
        <input @change="sexChanged" type="radio" value="Masculino" :sex="persona.sex">
        <label type="text" for="two">Masculino</label><br><br>
        <button @click="agregar()">Agregar</button><br><br>
    </div>
</template>
<script>
    export default {
        name: "fl-form",
        props: {
            persona: Object,
        },
        methods: {
            agregar() {
                this.$emit('addPerson');
                idName.value = '';
                idAge.value = '';
            },
            nameChanged(event) {
                this.$emit('setName', event.target.value)
            },
            ageChanged(event) {
                this.$emit('setAge', event.target.value)
            },
            sexChanged(event) {
                this.$emit('setSex', event.target.value)
            }
        }
    }
</script>
<style>
</style>