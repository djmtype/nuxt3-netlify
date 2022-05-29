<template>
  <div>
    <Title>Nuxt 3 Example</Title>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/playlists">Playlists</NuxtLink></li>
        <li><NuxtLink to="/users">Users</NuxtLink></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
