<template>
  <div :class="ns.b()">
    <h3 :class="ns.e('el')">子项目首页</h3>
  </div>
</template>

<script lang="ts" setup>
  import { requestDemo } from '@/apis';

  const ns = useNamespace('home');

  requestDemo('s');
</script>

<style lang="scss">
  @include b(home) {
    @include e(el) {
      color: red;
    }
  }
</style>
