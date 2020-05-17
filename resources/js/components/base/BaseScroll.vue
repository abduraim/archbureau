<template>

    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="text">
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>

</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        name: "BaseScroll",
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    autoHeight: true,
                    freeMode: true,
                    scrollbar: {
                        el: '.swiper-scrollbar'
                    },
                    mousewheel: true
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {

        },
        updated() {
            this.swiper.slideTo(0, 0, false);
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss" scoped>

    .swiper {
        width: 960px;
        max-height: calc(100vh - 40px - 40px);
        .swiper-slide {
            &.text {
                height: auto;
                box-sizing: border-box;
                padding-right: 30px;
            }
        }
    }

</style>
