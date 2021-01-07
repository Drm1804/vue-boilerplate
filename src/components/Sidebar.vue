<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "@/utils/vue-imports";
@Component({
  name: "Navbar",
})
export default class Navbar extends Vue {
  /* eslint-disable */
  @Prop() value: any;
  links = [
    { title: "Главная", url: "/", exact: true },
    { title: "Примеры", url: "/examples" },
    { title: "О сборке", url: "/about" },
  ];
}
</script>
