<template>
  <h4>Currency: {{ user?.email }}</h4>
</template>

<script setup>
// import { useRoute } from 'vue-router'



    const route = useRoute()
    const { data: user } = useFetch('https://jsonplaceholder.typicode.com/users/' + route.params.id)

   // console.log({ user })

  

</script>