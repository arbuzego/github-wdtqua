<template>
  {{ route.params.id }}
</template>

<script setup>
definePageMeta({
  layout: 'empty',
});

const route = useRoute();
</script>
