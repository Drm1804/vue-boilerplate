<template>
  <div class="home">
    <h1>Vue Boilerplates</h1>

    <h3>
      Vue + Typescript + Materialize-css + Lazy loading and code splitting
    </h3>
    <div class="block">
      <h2>Заголовк блока</h2>
      <h3>Подзаголовк блока</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        possimus dolorem nostrum fugiat minus sapiente ipsam, delectus
        dignissimos eveniet minima necessitatibus nobis totam ratione inventore
        quaerat velit? Quae, eum sit.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import Navbar from "@/components/Navbar.vue";

@Component({
  name: "Home",
  components: {
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
