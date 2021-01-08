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
import { routes } from "@/router";
import { Vue, Component, Prop } from "@/utils/vue-imports";
import { RouteConfig } from 'vue-router';
@Component({
  name: "Navbar",
})
export default class Navbar extends Vue {
  @Prop() value: any;

  get links(): MenuItem[] {
    return routes.reduce((res: MenuItem[], el: RouteConfig) => {
      if (el && el.meta && el.meta.sideMenu) {
        res.push({
          title: el.name,
          url: el.path,
          exact: el.meta.exact,
        });
      }
      return res;
    }, []);
  }
}

interface MenuItem {
  title: string | undefined;
  url: string;
  exact?: boolean;
}
</script>
