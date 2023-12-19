<script setup lang="ts">
import { ref } from 'vue'
import { UserOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons-vue';

const text = ref<string>('')
const categories = ref<Array<string>>(['Wine', 'Whisky Scotch', 'Gim'])
const category = ref<string>('')

const onChange = (event: any) => {
  console.log(event.target.value)
}

</script>

<template>
    <a-row justify="center" :gutter="[0, 16]">
      <a-col :span="24">
        <a-input v-model:value="text" @change="onChange" size="large" placeholder="Busque pela sua bebida">
          <template #prefix>
            <search-outlined />
          </template>
          <template #suffix>
            <a-tooltip title="Você precisa digitar ao menos 3 caractéres para buscar.">
              <info-circle-outlined />
            </a-tooltip>
          </template>
        </a-input>
      </a-col>
      <a-col :span="24">
        <a-radio-group v-model:value="category" size="small">
          <a-radio-button
              v-for="(c, number) of categories"
              v-bind:key="number"
              :value="c"
          >
            {{ c }}
          </a-radio-button>
        </a-radio-group>
      </a-col>
    </a-row>
</template>

<style scoped>
</style>
