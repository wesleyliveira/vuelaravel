<template>
  <div class="main">
    <div class="sidebar">
      <SideBarComponent />
    </div>

    <div class="content-right">
      <div class="navbar">
        <NabBarComponent />
      </div>

      <div class="pages">
        <slot name="slot-pages"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "./components/SideBarComponent.vue";
import NabBarComponent from "./components/NabBarComponent.vue";

export default {
  name: "DashBoardComponent",
  components: {
    SideBarComponent,
    NabBarComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
