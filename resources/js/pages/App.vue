<template>

    <div class="wrapper">

        <div class="content index-page">
            <aside>
                <TheMenu></TheMenu>
            </aside>
            <section>
                <BaseScroll>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </BaseScroll>
            </section>
        </div>

        <TheFooter></TheFooter>

        <swiper class="swiper underlay" :options="swiperOption">
            <swiper-slide>
                <img src="/static/images/img01.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/static/images/img02.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/static/images/img03.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/static/images/img04.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/static/images/img05.jpg" alt="">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>


    </div>

</template>

<script>

    import TheMenu from "../components/TheMenu";
    import TheFooter from "./partials/TheFooter";

    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        name: "App",
        components: {
            TheMenu,
            TheFooter,
            swiper,
            swiperSlide
        },
        data() {
            return {
                currentLanguage: 'ru',
                swiperOption: {
                    speed: 1000,
                    loop: true,
                    autoplay: {
                        delay: 10000,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
    }

</script>

<style lang="scss" scoped>

    .swiper.underlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
            height: 100%;
            img {
                flex-shrink: 0;
                min-width: 100%;
                min-height: 100%
            }
        }
    }

    .fade-enter-active {
        transition: all ease .5s;
    }
    .fade-leave-active {
        transition: all ease .3s;
    }
    .fade-enter {
        opacity: 0;
        transform: translateY(-100px);
    }

    .fade-leave-to {
        opacity: 0;
        transform: translateY(100px);
    }

</style>
