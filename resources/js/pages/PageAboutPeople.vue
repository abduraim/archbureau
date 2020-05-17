<template>

    <div>
        <BaseCard>
            <template v-slot:header>
                Люди
            </template>
            <template v-slot:content>
                <p>Список сотрудников</p>
            </template>
        </BaseCard>
    </div>

</template>

<script>

    export default {
        name: "PageAboutPeople",
    }
</script>

<style scoped>

</style>
