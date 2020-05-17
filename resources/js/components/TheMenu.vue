<template>

    <div class="menu">

        <div class="main-menu transparent" :class="{closed: mainMenuClosed}">
            <div class="title" @click="toogleShowMenu">
                <span class="brand">ArchBureau</span>
                <TheLangChange></TheLangChange>
            </div>
            <nav class="menu-list">
                <router-link
                    :to="`/${currentLanguage}/about/company`"
                    class="menu-item about"
                    :class="{active: currentSectionName == 'about'}"
                >Компания/Контакты</router-link>
                <router-link
                    :to="`/${currentLanguage}/projects`"
                    class="menu-item projects"
                    :class="{active: currentSectionName == 'projects'}"
                >Проекты</router-link>
                <router-link
                    :to="`/${currentLanguage}/ideas`"
                    class="menu-item ideas"
                    :class="{active: currentSectionName == 'ideas'}"
                >Идеи/фотосессия</router-link>
                <router-link
                    :to="`/${currentLanguage}/creation`"
                    class="menu-item creation"
                    :class="{active: currentSectionName == 'creation'}"
                >Творчество</router-link>
                <router-link
                    :to="`/${currentLanguage}/news`"
                    class="menu-item news"
                    :class="{active: currentSectionName == 'news'}"
                >Новости</router-link>
            </nav>
        </div>

        <transition name="fade" mode="out-in">
            <div class="sub-menu about" v-if="currentSectionName == 'about'" key="about">
                <router-link
                    :to="`/${currentLanguage}/about/company`"
                    class="side-menu-button transparent"
                >О компании</router-link>
                <router-link
                    :to="`/${currentLanguage}/about/contacts`"
                    class="side-menu-button transparent"
                >Контакты</router-link>
                <router-link
                    :to="`/${currentLanguage}/about/people`"
                    class="side-menu-button transparent"
                >Люди</router-link>
            </div>
            <div class="sub-menu projects" v-if="currentSectionName == 'projects'" key="projects">
                <BaseAccordion :accordion-items="accordionItems"></BaseAccordion>
            </div>
        </transition>


    </div>

</template>

<script>

    import TheLangChange from "./TheLangChange";

    export default {
        name: 'TheMenu',
        components: {
            TheLangChange,
        },
        data() {
            return {
                currentSection: '',
                mainMenuClosed: false,
                accordionItems: [
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: '<span>Описание</span>',
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>"
                    },
                    {
                        title: 'Another',
                        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam corporis cumque deserunt distinctio maiores molestias nam nemo neque, porro possimus praesentium quisquam quos, recusandae temporibus totam ullam voluptates?</p>'
                    }
                ]
            }
        },
        computed: {
            currentLanguage() {
                return this.$store.state.currentLanguage;
            },
            currentSectionName() {
                return this.$route.matched[0].name;
            },
        },
        mounted() {

        },
        methods: {
            toogleShowMenu() {
                this.mainMenuClosed = !this.mainMenuClosed;
            },
        },
    }

</script>

<style lang="scss" scoped>

    $border-color: #fff;
    $text-color: #000;

    .main-menu {
        border: 1px solid $border-color;
        width: 360px;
        margin-bottom: 10px;
        .title {
            display: flex;
            justify-content: space-between;
            background-color: $border-color;
            font-weight: bold;
            color: $text-color;
            padding: 5px;
            cursor: pointer;
            border-bottom: 1px solid #DDD;
        }
        .menu-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(9, 1fr);
            grid-template-areas:
                "a a"
                "a a"
                "p n"
                "p n"
                "p n"
                "p c"
                "p c"
                "i c"
                "i c";
            width: 100%;
            height: 300px;
            overflow: hidden;
            transition: all ease .3s;

            .menu-item {
                line-height: 1;
                padding: 5px;
                border: 1px solid $border-color;

                transition: all ease .3s;
                text-decoration: none;
                color: $border-color;

                &.about {
                    grid-area: a;
                }

                &.projects {
                    grid-area: p;
                }

                &.ideas {
                    grid-area: i;
                }

                &.creation {
                    grid-area: c;
                }

                &.news {
                    grid-area: n;
                }

                &:hover {
                    background-color: $border-color;
                    color: $text-color;
                }
                &.active {
                    background-color: $border-color;
                    color: $text-color;
                }
            }
        }
        &.closed {
            .title {
                border: none;
            }
            .menu-list {
                height: 0px;
                opacity: 0;
            }
        }
    }

    .fade-enter-active {
        transition: all ease .5s;
    }
    .fade-leave-active {
        transition: all ease .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateX(-100px);
    }


</style>
