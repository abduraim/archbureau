<template>
    <span class="lang-list">
        <span
            class="lang"
            :class="{active: currentLanguage == 'ru'}"
            @click.stop="changeLang('ru')"
        >RU</span>
        <span
            class="lang"
            :class="{active: currentLanguage == 'en'}"
            @click.stop="changeLang('en')"
        >EN</span>
        <span
            class="lang"
            :class="{active: currentLanguage == 'fr'}"
            @click.stop="changeLang('fr')"
        >FR</span>
    </span>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: "LanguageChange",
        data() {
            return {

            }
        },
        computed: mapState([
            'currentLanguage',
        ]),
        mounted() {

        },
        methods: {
            changeLang(lang) {
                // Заменяем префикс выбранного языка в url
                let currentFullPathArray = this.$route.fullPath.split('/');
                currentFullPathArray.splice(1,1, lang);
                let newFullPath = currentFullPathArray.join('/');
                if (this.$route.fullPath != newFullPath) {
                    this.$router.push({path: newFullPath});
                }

            }
        },
    }

</script>

<style lang="scss" scoped>

    $langIconWidth: 30px;

    .lang-list {
        display: flex;
        .lang {
            width: 0;
            opacity: 0;
            text-align: center;
            overflow: hidden;
            display: inline-block;
            transition: all ease .3s;
            &.active {
                width: $langIconWidth;
                opacity: 1;
            }
            &:hover {
                font-weight: bold;
                color: orange;
            }
        }
        &:hover {
            .lang {
                width: $langIconWidth;
                opacity: 1;
                &.active {
                    text-decoration: underline;
                }
            }
        }
    }

</style>
