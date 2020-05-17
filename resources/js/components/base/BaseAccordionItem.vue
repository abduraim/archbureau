<template>

    <div class="opening-button transparent" :class="{open: isOpen}">
        <div class="opening-button__title">
            <span class="opening-button__title__text">
                <slot name="title"></slot>
            </span>
            <span class="opening-button__title__icon" @click="toggle()">&#10010;</span>
        </div>
        <div class="opening-button__body">
            <slot name="body">
                <p>test</p>
            </slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "BaseAccordionItem",
        data() {
            return {
                isOpen: false,
            }
        },
        methods: {
            toggle() {
                this.$emit('item-toggle', this._uid);
                this.isOpen = !this.isOpen;
            },
            hide() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .opening-button {
        background-color: #fff;
        margin-bottom: 5px;

        &__title {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 5px 10px;
            &__text {
            }
            &__icon {
                padding: 0 5px;
                cursor: pointer;
                &:hover {
                    color: orange;
                }
            }
        }

        &__body {
            max-height: 0;
            padding: 0px 10px;
            opacity: 0;
            overflow: hidden;
            transition: all ease .5s;
        }

        &.open {
            .opening-button__body {
                max-height: 1000px;
                padding: 5px 10px;
                opacity: 1;
            }
        }

    }

</style>
