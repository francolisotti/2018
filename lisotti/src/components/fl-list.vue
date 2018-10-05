<template>
    <div id="fl-list">
        <h4>Lista de personas</h4>
        <span>Filtrar por sexo:</span>
        <select @change="filterChanged" :filtroSexo="filtroSexo">
            <option selected="selected" value="Ambos">Ambos</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
        </select>
        <ul>
            <li v-for="(persona, index) in filteredPersonas" :key="index">
                {{persona.name}} - {{persona.age}} - {{persona.sex}}
                <button @click="borrarPersona(persona.id)">Borrar</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "fl-list",
        props: {
            filteredPersonas: Array,
            filtroSexo: String
        },
        methods: {
            borrarPersona(id) {
                this.$emit('deletePerson', id)
            },
            filterChanged(event) {
                this.$emit('filterChanged', event.target.value)
            }
        }


    }
</script>
<style>

</style>