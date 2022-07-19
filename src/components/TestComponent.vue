<template>
  <div>
    <h1 v-if="!isDone">Countdown: {{ countDown }} seconds</h1>
    <h1 v-else>Hello World</h1>
  </div>
</template>

<script>
import useCountDown from "./useTest.js";
export default {
  name: "TestComponent",
  setup(){
    const {countDown, isDone} = useCountDown();
    return {countDown, isDone};
  }
};
</script>
