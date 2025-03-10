<script setup lang="ts">
import { ref } from "vue";
import { MyInput } from ".."

const myInputValue = ref("");
</script>

<template>
    <my-input v-model="myInputValue">
        Custom label
    </my-input>

    {{ myInputValue }}
</template>

