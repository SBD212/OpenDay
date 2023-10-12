<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
    .card {
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
        text-align: center;
        padding: 1rem;
    }
</style>