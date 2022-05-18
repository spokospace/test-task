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
      <a
        :title="props.title"
        class="product-tile__readmore"
        href="#"
        v-html="`${t('button.read-more-about')} ${props.title}`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.product-tile {
  // @apply: https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply
  @apply flex flex-wrap sm:flex-nowrap lg:flex-wrap border-solid border-b border-black last:border-b-0 lg:border-b-0 pb-10 mb-10;

  &__title {
    @apply font-bold text-convertDark dark:text-gray-100;
    font-size: 1.5rem;
    line-height: 1.625rem;
    margin-bottom: 0.688rem;
  }

  &__subtitle {
    @apply font-bold mb-2.5 w-200px text-convertDark dark:text-gray-300;
  }

  &__cover {
    @apply w-100 sm:w-200px lg:w-286px min-w-fit;
    filter: drop-shadow(5px 5px 12px rgba(0, 0, 0, 0.2));
    margin-bottom: 2.188rem;

    @media (min-width: 640px) and (max-width: 1024px) {
      margin-right: 3.125rem;
    }

    img {
      @apply w-full;
    }
  }

  &__description {
    // line-clamp: https://windicss.org/plugins/official/line-clamp.html
    @apply font-light line-clamp-6 mb-2.5 text-convertDark dark:text-gray-300;
    font-size: 1.0625rem;
    line-height: 1.58;
  }

  &__readmore {
    @apply underline underline-offset-1 font-medium text-convertViolet dark:text-violet-400;
    font-size: 0.9375rem;

    &:after {
      content: '...';
    }
  }

}
</style>
