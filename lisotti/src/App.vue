<template>
  <div id="app">
    <fl-form @setName="setName" @setAge="setAge" @setSex="setSex" @addPerson="addPerson" :persona="persona"></fl-form>
    <fl-list :filteredPersonas="filteredPersonas" @filterChanged="setFilter" @deletePerson="deletePerson"></fl-list>
  </div>
</template>

<script>
  import flForm from "./components/fl-form.vue"
  import flList from "./components/fl-list.vue"
  export default {
    name: 'app',
    components: {
      flForm,
      flList
    },
    data() {
      return {
        idInicial: 0,
        filtroSexo: "Ambos",
        personas: [],
        persona: {
          id: 0,
          name: "",
          sex: "",
          age: 0
        }
      }
    },
    computed: {
      filteredPersonas: function () {
        let rtn = this.personas;
        if (this.filtroSexo != "Ambos") {
          rtn = this.personas.filter(persona => persona.sex === this.filtroSexo);
        }
        return rtn;
      }
    },
    methods: {
      addPerson() {
        if (this.persona.name && this.persona.age > 0 && this.persona.age < 100 && this.persona.sex) {
          this.persona.id = this.idInicial + 1;
          this.idInicial = this.idInicial + 1;
          this.personas.push({
            id: this.persona.id,
            name: this.persona.name,
            sex: this.persona.sex,
            age: this.persona.age
          });
          this.persona.id = 0;
          this.persona.name = "";
          this.persona.sex = "";
          this.persona.age = 0;
        } else {
          alert('Formulario incorrecto');
        }
      },
      setName(value) {
        this.persona.name = value;
      },
      setAge(value) {
        this.persona.age = value;
      },
      setSex(value) {
        this.persona.sex = value;
      },
      setFilter(value) {
        this.filtroSexo = value
      },
      deletePerson(id) {
        this.personas = this.personas.filter(persona => persona.id !== id);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>