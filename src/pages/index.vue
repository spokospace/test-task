<script setup lang="ts">
import { bookList } from '~/store/bookStore'
const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto lg:max-w-2xl">
    <h1 class="heading font-black">
      {{ t('headings.featured-products') }}
    </h1>
    <div class="product-list">
      <ProductTile
        v-for="(book, index) in bookList" :key="index"
        :title="t(`books.${book.slug}.title`)"
        :subtitle="t(`books.${book.slug}.subtitle`)"
        :description="t(`books.${book.slug}.description`)"
        :image="book.image"
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
  margin-bottom: 1.875rem;
  margin-top: 2.875rem;

  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 2.5625rem;
    margin-top: 1.875rem;
  }

  @media (min-width: 1280px) {
    font-size: 3.75rem;
    line-height: 4.375rem;
    margin-bottom: 3.1875rem;
    margin-top: 4.875rem;
  }
}

.product-list {
  @apply lg:grid grid-cols-4 gap-24
}
</style>
