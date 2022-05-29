<template>
	<div>
		Single User
<p>{{ user.name }}</p>
	</div>
</template>

<script setup>
	const route = useRoute();
	// const { data: user } = useFetch(`/api/users/${route.params.id}`);
const { data: users } = await useFetch(`/api/users`);
//  const { data: user } = await useFetch(`/api/users/` + route.params.id)

const user = users.value.find(u => u.id == route.params.id);
// console.log(user);
</script>



