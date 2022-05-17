<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto">
    <h1 class="heading font-black">
      {{ t('headings.featured-products') }}
    </h1>
    <div class="product-list">
      <ProductTile
        v-for="index in 4" :key="index"
        :title="t('books.magi.title')"
        :subtitle="t('books.magi.subtitle')"
        :description="t('books.magi.description')"
        image="magi.png"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss">
.heading {
  font-size: 2rem;
  line-height: 2.344rem;
  margin-top: 2.875rem;
  margin-bottom: 1.875rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2.5625rem;
  }

  @media (min-width: 1280px) {
    font-size: 3.75rem;
    line-height: 0.625rem;
    margin-bottom: 3.1875rem;
  }
}

.product-list {
  @apply lg:grid grid-cols-4 gap-24
}
</style>
