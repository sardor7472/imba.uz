<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <ul class="about-link-menu">
                    <li tag="li" to="/" class="about-link-menu-item cur-p">{{langFile.home}}</li>
                    <li class="about-link-menu-item active">{{langFile.delivery}}</li>
                </ul>
                <div class="delivery">
                    <div class="delivery-img">
                        <img src="../assets/images/delivery.png" alt="">
                    </div>
                    <div class="delivery-accordion" >
                        <div class="delivery-accordion-block"
                             v-for="item in items" :key="item.id"
                             >
                            <div class="delivery-accordion-item" @click="item.isVisible = !item.isVisible">
                                <h4 class="delivery-accordion-item-title">Способ доставки {{item.id}}</h4>
                                <p class="delivery-accordion-item-icon">
                                    <img src="../assets/images/arrow2.png" alt="">
                                </p>
                            </div>
                            <div v-show="item.isVisible" class="delivery-accordion-text">
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
<!--        <left-sidebar></left-sidebar>-->
        <!--MAIN END-->
    </div>
</template>
<script>
    // import LeftSidebar from "../components/LeftSidebar";
    export default {
        data: () => ({
            multiple: {
                type: Boolean,
                default: false
            },
            items:[
                {id: 1,isVisible: false},
                {id: 2,isVisible: false},
                {id: 3,isVisible: false},
                {id: 4,isVisible: false},
            ],
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