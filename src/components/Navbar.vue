<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import M from "materialize-css";

@Component({
  name: "Navbar",
})
export default class Navbar extends Vue {
  public date = new Date();
  /* eslint-disable */
  private interval: any = null;
  public dropdown: any = null;

  async logout() {
    await this.$store.dispatch("logout");
    this.$router.push("/login?message=logout");
  }

  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);

    const dd: any = this.$refs.dropdown;
    this.dropdown = M.Dropdown.init(dd, {
      constrainWidth: false,
    });
  }

  get name() {
    return this.$store.getters.userData.name;
  }

  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  }
}
</script>
