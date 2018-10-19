<template>
  <div class="list">
    <select id="filter" @change="filterChanged" class="pointer">
      <option value="Ambos" selected>Ambos</option>
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
    </select>
    <div v-if="filteredPeople.length">
      <ul id="li" v-for="person in filteredPeople" :key="person.id">
        Nombre: {{ person.name }} - Edad: {{ person.age }} - Sexo: {{ person.sex }}
        <button>
          <router-link :to="{ name: 'update', params: { id: person.id }}">Editar</router-link>
        </button> -
        <button class="button" @click="deletePerson(person.id)">Borrar</button>
      </ul>
    </div>
    <div v-else>
      <p>Lista vacía</p>
    </div>
  </div>
</template>

<script>
  import PersonService from '@/services/personService'

  export default {
    name: 'list',
    data() {
      return {
        filter: "Ambos",
        people: []
      }
    },
    computed: {
      filteredPeople: function () {
        let filteredPeople;
        if (this.filter === "Ambos") {
          filteredPeople = this.people;
        } else {
          filteredPeople = this.people.filter(person => person.sex === this.filter);
        }
        return filteredPeople;
      }
    },
    created() {
      this.people = PersonService.getAll();
    },
    methods: {
      deletePerson(id) {
        this.people = PersonService.deleteOne(id);
      },
      filterChanged(event) {
        this.filter = event.target.value
      }
    }
  }
</script>
<style>
  ul {
    list-style-position: inside;
  }

  a {
    text-decoration: none;
    color: black
  }
</style>