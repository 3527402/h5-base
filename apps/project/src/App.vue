<template>
  <template v-if="isView">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if="keepAlive" :key="route.name || route.fullPath" :is="Component"></component>
      </keep-alive>
      <component v-if="!keepAlive" :key="route.name || route.fullPath" :is="Component"></component>
    </router-view>
  </template>
</template>

<script lang="ts" setup>
  const hasBaseInfo = ref(false);
  const route = useRoute();
  const isView = computed(() => {
    return (route.meta && route.meta.public) || hasBaseInfo.value;
  });
  watch(isView, (val) => {
    if (val) {
      // isView 为 true 时，隐藏启动loading
      window.ovopark.hideStartLoading();
    }
  });
  const keepAlive = computed(() => {
    return route.meta?.keepAlive;
  });

  const baseStore = useBaseStore();
  if (baseStore.token) {
    Promise.all([
      baseStore.getEnterpriseConfig(),
      baseStore.getUserInfo(),
      baseStore.getMenusPrivileges(),
    ]).then(() => {
      hasBaseInfo.value = true;

      // ios微信/企业微信，为了提升用户体验和浏览网页的效率，给浏览过的网页添加了一个类似于快照的东西，使得页面返回不会重新刷新
      if (window.ovopark.browser.ios && window.ovopark.browser.weixin) {
        window.addEventListener('pageshow', (event) => {
          if (event.persisted && baseStore.needReload) {
            window.location.reload();
          }
        });
      }
    });
  }
</script>

<style lang="scss">
  #app {
    height: 100vh;
    overflow: auto;
  }
</style>
