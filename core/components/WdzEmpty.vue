<template>
  <van-empty class="wdz-empty">
    <template v-if="!$slots.default" #description>
      <span>{{ props.text || '暂无数据' }}</span>
    </template>
    <template #image>
      <slot v-if="$slots.image" name="image"></slot>
      <CoreSvgNodata v-else></CoreSvgNodata>
    </template>
    <slot></slot>
  </van-empty>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    text?: string;
  }>();
</script>

<style lang="scss">
  .wdz-empty {
    height: 100%;
    .van-empty__image {
      width: 50px;
      height: 50px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .van-empty__bottom {
      margin-top: 16px;
      .van-empty__description {
        margin-top: 0;
        text-align: center;
      }
    }
  }
</style>
