<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <ul class="about-link-menu">
                    <router-link tag="li" to="/" href="#" class="about-link-menu-item cur-p">{{langFile.home}}</router-link>
                    <li class="about-link-menu-item active">{{langFile.searchingresults}}</li>
                </ul>
                <div class="search-results">
                    <h4 class="search-results-title">{{langFile.numberresults}}</h4>
                    <div class="search-results-main">
                        <div class="search-first-block">
                            <div class="search-results-left-side">
                                <div class="search-results-left-side-category-block">
                                    <h4 class="search-results-left-side-title">
                                        {{langFile.categories}}
                                    </h4>
                                    <div class="search-results-left-side-link">
                                        <a href="#" class="search-results-left-side-link-item">{{langFile.vegetables}}</a>
                                    </div>
                                    <div class="search-results-left-side-link">
                                        <a href="#" class="search-results-left-side-link-item active">{{langFile.fruits}}</a>
                                    </div>
                                    <div class="search-results-left-side-link">
                                        <a href="#" class="search-results-left-side-link-item">{{langFile.driedfruits}}</a>
                                    </div>
                                    <div class="search-results-left-side-link">
                                        <a href="#" class="search-results-left-side-link-item">{{langFile.nuts}}</a>
                                    </div>
                                </div>
                                <div class="search-results-left-side-price-block">
                                    <h4 class="search-results-left-side-title">{{langFile.price}}</h4>
                                    <div class="search-results-left-side-price-block-slider" id="slider">
                                        <vue-slider
                                                :min="min"
                                                :max="max"
                                                v-model="value"
                                                :enable-cross="false"
                                        ></vue-slider>
                                    </div>
                                    <div class="search-results-left-side-input-block">
                                        <input v-model="value[0]" type="text" class="search-results-left-side-input" id="minPrice" name="min_price">
                                        <input v-model="value[1]" type="text" class="search-results-left-side-input" id="maxPrice" name="max_price">
                                    </div>
                                </div>
                                <div class="search-results-left-side-radio-block">
                                    <h4 class="search-results-left-side-title">{{langFile.sections}}</h4>
                                    <div class="payment-search-element">
                                        <div class="payment-search-radio-box">
                                            <input type="checkbox" class="payment-search-radio-box-input" id="3">
                                            <label for="3"></label>
                                        </div>
                                        <label for="3">{{langFile.new}}</label>
                                    </div>
                                    <div class="payment-search-element">
                                        <div class="payment-search-radio-box">
                                            <input type="checkbox" class="payment-search-radio-box-input" id="2">
                                            <label for="2"></label>
                                        </div>
                                        <label for="2">{{langFile.topsales}}</label>
                                    </div>
                                    <div class="payment-search-element">
                                        <div class="payment-search-radio-box">
                                            <input type="checkbox" class="payment-search-radio-box-input" id="1">
                                            <label for="1"></label>
                                        </div>
                                        <label for="1">{{langFile.discounts}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="search-second-block">
                            <div class="row equal-offsets">
                                <div class="col-xl-3 col-lg-4" v-for="(product,i) in products" :key="i">
                                    <div class="section-two-search">
                                        <div class="section-two-search-block-item">
                                            <img src="../assets/images/melo.png" alt="" class="section-two-block-item-img">
                                            <h4>Мыло johnson's baby</h4>
                                            <p><span>10 000</span>сум за 1 шт</p>
                                            <div class="counter">
                                                <div class="counter-item" @click="decrement(product)">
                                                <span>
                                                    <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                                         id="Capa_1" x="0px" y="0px" viewBox="0 0 341.333 341.333"
                                                         style="enable-background:new 0 0 341.333 341.333;"
                                                         xml:space="preserve">
                                                            <rect y="149.333" width="341.333" height="42.667"/>
                                                    </svg>
                                                </span>
                                                </div>
                                                <div class="counter-item">{{product.count}}</div>
                                                <div class="counter-item" @click="increment(product)">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="10"
                                                         viewBox="0 0 448 448" width="8px"><path
                                                            d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"/>
                                                    </svg>
                                                </span>
                                                </div>
                                            </div>
                                            <button type="button">в корзину
                                                <svg height="512pt" viewBox="0 -31 512.00033 512" width="512pt"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"/>
                                                    <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"/>
                                                    <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--MAIN END-->
    </div>
</template>
<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
    export default {
        data: () => ({
            value: [0, 30000],
            min: 0,
            max: 50000000,
            products: [
                {count: 0,},
                {count: 0,},
                {count: 0,},
                {count: 0,},
                {count: 0,},
            ],
        }),
        components: {
            VueSlider
        },
        methods:{
            decrement(product) {
                if (product.count >= 1) {
                    product.count--
                }
            },
            increment(product) {
                product.count++
            },
        },
        computed: {
            localLanguage() {
                return this.$store.state.localLanguage
            },
            lang() {
                return this.$store.state.currentLang
            },
            langFile() {
                return this.$store.state.lang
            }
        },
    }
</script>
<style lang="css" scoped>

</style>