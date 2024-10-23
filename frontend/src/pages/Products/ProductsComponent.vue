<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="tittle_pages">
        <p>Produtos</p>
      </div>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";

export default {
  name: "ProductsComponent",
  components: {
    DashboardComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />