<template>
  <div id="list">
    <span class="demo-input-label">Filtrar </span>
    <el-select id="filter" @change="filterChanged" class="pointer" value="Ambos">
      <el-option value="Femenino">Femenino</el-option>
      <el-option value="Masculino">Masculino</el-option>
    </el-select>
    <el-table v-if="filteredPeople.length" :data="filteredPeople">
      <el-table-column prop="name" label="Nombre" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="Sexo" width="180">
      </el-table-column>
      <el-table-column prop="age" label="Edad">
      </el-table-column>
      <el-table-column label="Operaciones">
        <template slot-scope="scope">
          <el-button type=primary>
            <router-link :to="{ name: 'update', params: { id: scope.row.id }}"><i class="el-icon-edit"></i></router-link>
          </el-button>
          <el-button type=primary @click="deletePerson(scope.row.id)"><i class="el-icon-delete"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-else>
      <p>Lista vacía</p>
    </div>
  </div>
</template>

<script>
  import PersonService from "@/services/personService";

  export default {
    name: "list",
    data() {
      return {
        filter: "Ambos",
        people: []
      };
    },
    computed: {
      filteredPeople: function () {
        let filteredPeople;
        if (this.filter === "Ambos") {
          filteredPeople = this.people;
        } else {
          filteredPeople = this.people.filter(
            person => person.sex === this.filter
          );
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
        this.filter = event;
      }
    }
  };
</script>
<style>
  #list {
    margin-top: 10px;
  }

  a:visited {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    text-decoration: none;
    color: #fff;
  }

  a:focus {
    text-decoration: none;
    color: #fff;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: #fff
  }
</style>