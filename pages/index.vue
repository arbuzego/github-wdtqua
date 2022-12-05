<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <ul>
      <li><NuxtLink to="/posts/1">posts one</NuxtLink></li>
      <li><NuxtLink to="/posts/2">posts two</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})
</script>
