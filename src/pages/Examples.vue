<template>
  <div>
    <div class="page-title">
      <h3>Примеры</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Имя</label>
        <span class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
  name: "Examples",
})
export default class Examples extends Vue {}
</script>
