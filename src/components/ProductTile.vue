<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  description: string
  image: string
}>()

const { t } = useI18n()
</script>

<template>
  <div class="product-tile">
    <picture class="product-tile__cover">
      <source media="(max-width: 640px)" :srcset="`/images/${props.image}`">
      <source media="(min-width: 641px) and (max-width:1199px)" :srcset="`/images/thumbs/${props.image}`">
      <source media="(min-width: 1200px)" :srcset="`/images/${props.image}`">
      <img :src="`/images/${props.image}`" :alt="props.title">
    </picture>
    <div>
      <h2 class="product-tile__title">
        {{ props.title }}
      </h2>
      <h3 class="product-tile__subtitle">
        {{ props.subtitle }}
      </h3>
      <p class="product-tile__description">
        {{ props.description }}
      </p>
      <a class="product-tile__readmore" href="#" v-html="`${t('button.read-more-about')} ${props.title}`" />
    </div>
  </div>
</template>

<style lang="scss">
$blue: #3546A6;

.product-tile {
  // https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply
  @apply flex flex-wrap sm:flex-nowrap lg:flex-wrap border-solid border-b border-black last:border-b-0 pb-10 mb-10;

  &__title {
    @apply font-bold;
    font-size: 1.5rem;
    line-height: 1.625rem;
    margin-bottom: 0.688rem;
  }

  &__subtitle {
    @apply font-bold;
  }

  &__cover {
    @apply w-100 sm:w-200px lg:w-286px min-w-fit;
    margin-bottom: 2.188rem;
    filter: drop-shadow(5px 5px 12px rgba(0, 0, 0, 0.2));

    @media (min-width: 640px) {
      margin-right: 3.125rem;
    }

    img {
      @apply w-full;
    }

  }

  &__description {
    @apply font-light;
    font-size: 1.0625rem;
  }

  &__readmore {
    color: $blue
  }

}
</style>
