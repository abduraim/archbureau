<template>

    <article class="content-card transparent">
        <div class="content-card__header">
            <slot name="header"></slot>
        </div>
        <div class="content-card__content">
            <slot name="content"></slot>
        </div>
    </article>

</template>

<script>
    export default {
        name: "BaseCard"
    }
</script>

<style lang="scss" scoped>

    .content-card {
        width: 100%;
        margin-bottom: 20px;

        &__header {
            padding: 10px 20px;
            background-color: #fff;
            border-bottom: 1px solid #DDDDDD;
            font-size: 20px;
            font-weight: bold;
        }
        &__content {
            padding: 20px;
            background-color: #fff;
        }
    }

</style>
