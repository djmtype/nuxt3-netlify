<template>
	<div>
			<!-- {{ data }} -->
    <ol>
      <li v-for="user in users" :key="user.id">
     <NuxtLink :to="`/users/${user.id}`">{{ user.name }} - {{ user.id }}</NuxtLink>
        <!-- <NuxtLink :to="'/users/' + user.id">{{ user.name }}</NuxtLink> -->
      </li>
    </ol>
	</div>
</template>

<script setup>
const { data: users } = await useFetch('/api/users')
</script>

