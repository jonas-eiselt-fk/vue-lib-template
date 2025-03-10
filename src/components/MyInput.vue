<script setup lang="ts">
import { useId } from "vue";

const modelValue = defineModel<string>({ required: false, default: "" });

const inputId = useId();
</script>

<template>
    <div>
        <label :for="inputId">
            <slot name="label">Label</slot>
        </label>
        <input v-model="modelValue" :id="inputId" type="text">
    </div>
</template>
