<template>

    <div>
        <BaseAccordionItem v-on:item-toggle="itemToggle" v-for="(accordionItem, index) in accordionItems" :key="index">
            <template v-slot:title>
                <div v-html="accordionItem.title"></div>
            </template>
            <template v-slot:body>
                <div v-html="accordionItem.body"></div>
            </template>
        </BaseAccordionItem>
    </div>

</template>

<script>
    export default {
        name: "BaseAccordion",
        props: {
            accordionItems: {
                type: Array
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            //
        },
        methods: {
            itemToggle(uid) {
                for (let i = 0; i < this.$children.length; i++ ){
                    if (this.$children[i]._uid != uid) {
                        this.$children[i].hide();
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
