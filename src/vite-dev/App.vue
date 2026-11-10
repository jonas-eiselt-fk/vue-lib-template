<script setup lang="ts">
import { ref } from "vue";
import MyContainer from "../components/MyContainer.vue";
import MyInput from "../components/MyInput.vue";

const myInputValue = ref("");
</script>

<template>
    <my-container>
        <my-input v-model="myInputValue">
            Custom label
        </my-input>
    </my-container>

    {{ myInputValue }}
</template>

