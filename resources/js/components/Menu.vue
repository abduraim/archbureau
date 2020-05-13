<template>

    <div class="menu">
        <div class="title">ArchBureau</div>
        <nav class="menu-list">
            <a href="#" class="menu-item">Main</a>
            <a href="#" class="menu-item">Projects</a>
            <a href="#" class="menu-item">Templates</a>
            <a href="#" class="menu-item">Another</a>
        </nav>
    </div>


</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>

    $border-color: #fff;
    $text-color: #000;

    .menu {
        z-index: 20;
        position: fixed;
        top: 20px;
        left: 20px;
        outline: 2px solid $border-color;
        width: 500px;
        .title {
            background-color: $border-color;
            font-weight: bold;
            color: $text-color;
            padding: 5px;
        }
        .menu-list {
            display: flex;
            /*flex-direction: column;*/
            width: 500px;
            align-items: stretch;
            flex-wrap: wrap;

            .menu-item {
                width: 50%;
                line-height: 1;
                padding: 5px;
                outline: 1px solid $border-color;
                height: 50px;
                transition: all ease .3s;
                text-decoration: none;
                color: $border-color;
                &:nth-child(1) {
                    width: 100%;
                }
                &:nth-child(2) {
                    height: 80px;
                }
                &:hover {
                    background-color: $border-color;
                    color: $text-color;
                }
            }
        }
    }



</style>
