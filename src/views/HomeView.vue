<template>
  <div class="home">
    Test
    <TestComponent />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import TestComponent from "@/components/TestComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    TestComponent,
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
