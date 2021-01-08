<template>
  <div>
    <!-- <Loader v-if="loading"></Loader> -->

    <div class="app-main-layout">
      <Navbar @click="isSideOpen = !isSideOpen" />

      <Sidebar v-model="isSideOpen" />

      <main class="app-content" :class="{ full: !isSideOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  name: "main-layout",
  components: {
    Navbar,
    Sidebar,
  },
})
export default class MainLayout extends Vue {
  public isSideOpen = true;
  public loading = true;

  async mounted() {
    if (!Object.keys(this.$store.getters.userData).length) {
      await this.$store.dispatch("fetchUserData");
    }

    this.loading = false;
  }
}
</script>
