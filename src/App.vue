<script setup>
import GameIndex from './components/ESGameIndex.vue'
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">All Games</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/new" class="nav-link">Add new game</router-link>
      </li>
    </div>
  </nav>

  <div class="container mt-3">
    <router-view />
  </div>
</template>
