<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

const myContainerRef = useTemplateRef("my-container");

onMounted(() => {
    if (!myContainerRef.value) {
        throw new Error("myContainerRef is not set!");
    }
});
</script>

<template>
    <div ref="my-container">
        <slot name="default"></slot>
    </div>
</template>
