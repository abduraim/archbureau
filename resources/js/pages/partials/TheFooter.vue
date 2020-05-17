<template>

    <footer>
        <router-link to="/">ArchBureau</router-link>
    </footer>

</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style lang="scss" scoped>

    footer {
        background-color: #000;
        opacity: .3;
        color: #fff;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 5px 20px;
        transition: all ease .3s;
        z-index: 10;
        &:hover {
            height: 100px;
            opacity: 1;
        }
    }

</style>
