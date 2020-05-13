<template>

    <div class="wrapper">
        <Menu></Menu>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <img src="map.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="vertical.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="icon.png" alt="">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>

</template>

<script>

    import Menu from "./Menu";

    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';


    export default {
        data() {
            return {
                swiperOption: {
                    speed: 1000,
                    autoplay: {
                        delay: 2500,
                        //disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        computed: {

        },
        components: {
            Menu,
            swiper,
            swiperSlide
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss">

    .swiper {
        height: 100vh;
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

</style>
