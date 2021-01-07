<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

@Component({
  components: {
    EmptyLayout,
    MainLayout,
  },
})
export default class App extends Vue {
  get layout() {
    /* eslint-disable */
    return (this.$route.meta.layout || "empty") + "-layout";
  }
}
</script>
