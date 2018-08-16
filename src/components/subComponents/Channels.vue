<template>
    <div class="channel" :class="{focus: focused}">
        {{ nom }}
    </div>
</template>

<script>
    import mixinEletWithoutChild from '../../mixins/mixiEltWithoutChild';
    export default {
        props: ['nom'],
        mixins: [mixinEletWithoutChild],

    }
</script>

<style scoped>
    .channel {
        border: 1px solid grey;
        height: 70px;
        width: 100%;
    }
</style>