<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";

@Component({
  name: "empty-layout",
})
export default class EmptyLayout extends Vue {}
</script>
