<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <a-row class="main-row" justify="center" align="middle" :gutter="0">
      <a-col :span="10">
        <a-row>
          <a-col :span="24">
            <h1>
              Get yourself a <strong>drink</strong>
            </h1>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="2">
            <router-link to="/about">Sobre</router-link>
          </a-col>
          <a-col :span="4">
            <router-link to="/">Página Inicial</router-link>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="14">
        <RouterView />
      </a-col>
    </a-row>
</template>

<style scoped>
</style>
