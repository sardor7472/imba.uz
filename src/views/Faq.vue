<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <ul class="about-link-menu">
                    <router-link tag="li" to="/" class="about-link-menu-item cur-p">{{langFile.home}}</router-link>
                    <li class="about-link-menu-item active">{{langFile.help}}</li>
                </ul>
                <div class="faq">
                    <div class="search-first-block ">
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
                        </div>
                    </div>
                    <div class="delivery-accordion faq-m">
                        <div class="delivery-accordion-block"
                        v-for="(faq, i) in faqs"
                        :key="i"
                        >
                            <div class="delivery-accordion-item" @click="faq.isVisible = !faq.isVisible">
                                <h4 class="delivery-accordion-item-title">Возврат товаров</h4>
                                <p class="delivery-accordion-item-icon">
                                    <img src="../assets/images/arrow2.png" alt="">
                                </p>
                            </div>
                            <div v-if="faq.isVisible" class="delivery-accordion-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
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
    export default {
        data: () => ({
            faqs:[
                {
                    isVisible: false
                },
                {
                    isVisible: false
                },
                {
                    isVisible: false
                }
            ]
        }),
        methods:{
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