<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="tittle_pages">
        <p>Início</p>
      </header>
      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="'7590'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Produtos'"
              :percentage="'12%'"
              :icon="'fa-box'"
              :qtd="'350'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Serviços'"
              :percentage="'22%'"
              :icon="'fa-store'"
              :qtd="'250'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Relatórios'"
              :percentage="'7%'"
              :icon="'fa-chart-bar'"
              :qtd="'30'"
            />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <ListsComponent :data="clients" description="Clientes" :columns="['Nome','E-mail']" />
          </div>

          <div class="col-12 col-md-6">
            <ListsComponent :data="products" description="Produtos" :columns="['Nome','Valor']" />
          </div>
        </div>
      </div>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponent from "../../components/CardsComponent";
import ListsComponent from "../../components/ListsComponent.vue";
import axios from "axios";

export default {
  name: 'HomeComponent',
  data() {
    return {
      clients: [],
      products: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let response = await axios.get ('/');

      if (response.status == 200) {
        this.clients = response.data.clients;
        this.products = response.data.products;
      } else {
        console.error("Ocorreu um erro!");
      }
    },
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
