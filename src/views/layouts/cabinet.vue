<template>
    <div>
        <!--HEADER BEGIN-->
        <header>
            <div class="header-top">
                <div class="container">
                    <div class="header-top-item">
                        <div class="col-xl-3 col-lg-3">
                            <div class="header-top-phone">
                                <img src="../../assets/images/phone-icon.png" alt="">
                                <a href="tel:+998935054505">+99 893 505 45 05</a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <ul class=" header-top-menu">
                                <router-link tag="li" to="/about" class="header-top-menu-item" exact
                                             active-class="active"><a>{{langFile.about}}</a></router-link>
                                <router-link tag="li" to="/order" class="header-top-menu-item" active-class="active"><a>{{langFile.delivery}}</a>
                                </router-link>
                                <router-link tag="li" to="/cabinet" class="header-top-menu-item" active-class="active">
                                    <a>{{langFile.help}}</a></router-link>
                            </ul>
                        </div>
                        <div class="col-xl-3 col-lg-3 header-top-lang-block">
                            <div class="for-kabinet">
                                <a href="#" class="header-top-lang-block-item">
                                    <img src="../../assets/images/kabinet-icon.png" alt="">
                                    <p class="header-top-lang-block-kabinet">{{langFile.cabinet}}</p>
                                    <div class="kabinet-enter">
                                        <div>
                                            <router-link exact active-class="active" tag="a" to="/"
                                                         class="kabinet-enter-item">Вход
                                            </router-link>
                                        </div>
                                        <div>
                                            <router-link active-class="active" tag="a" to="/about"
                                                         class="kabinet-enter-item">Регистрация
                                            </router-link>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="header-top-lang-block-item"
                                 @click="showLangList = !showLangList"
                            >
                                <img src="../../assets/images/lang-icon.png" alt="">
                                <div class="lang-current" :class="{'active' : showLangList}">{{lang}}
                                    <span class="lang-arrow">
                                        <svg version="1.1" height="12" width="25"
                                             id="Layer_1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink"
                                             x="0px" y="0px"
                                             viewBox="0 0 512.011 512.011"
                                             style="enable-background:new 0 0 512.011 512.011;"
                                             xml:space="preserve">
                                        <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                                            s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                                            C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                                    </svg>
                                    </span>
                                    <ul class="lang-list"
                                        :class="{'active' : showLangList}"

                                    >
                                        <li class="lang-list-item"
                                            v-for="item in localLanguage"
                                            @click="changeLanguage(item.id)"
                                            :key="item.id"
                                        ><a href="#">{{item.name}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="header-middle">
                    <router-link tag="a" to="/" href="#" class="col-xl-3 header-middle-logo">
                        <img src="../../assets/images/logo.png" alt="">
                    </router-link>
                    <div class="col-xl-7 col-lg-7">
                        <input type="text" class="header-middle-input" :placeholder="langFile.productsearch">
                        <p class="header-middle-input-search">
                            <img src="../../assets/images/search-icon.png" alt="">
                        </p>
                    </div>
                    <a href="#" class="col-xl-2 header-middle-korzina">
                        <div class="header-middle-korzina-icon">
                            <img src="../../assets/images/korzina.png" alt="">
                            <div class="header-middle-korzina-badge">1</div>
                        </div>
                        <div class="header-middle-korzina-title">
                            {{langFile.basket}}
                        </div>
                    </a>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="header-bottom-category">
                        <div>
                            <img src="../../assets/images/hamburger.png" alt="">
                        </div>
                        <h4 class="header-bottom-category-title">категории</h4>
                    </div>
                </div>
            </div>
        </header>
        <!--HEADER END-->
        <router-view/>
        <!--FOOTER BEGIN-->
        <div class="footer">
            <div class="container">
                <div class="footer-inner">
                    <ul class="footer-menu">
                        <router-link to="/about" tag="li" class="footer-menu-item"><a href="#" exact
                                                                                      active-class="active">{{langFile.about}}</a>
                        </router-link>
                        <router-link to="/order" tag="li" class="footer-menu-item"><a href="#" active-class="active">{{langFile.delivery}}</a>
                        </router-link>
                        <router-link to="/catalog" tag="li" class="footer-menu-item"><a href="#" active-class="active">{{langFile.help}}</a>
                        </router-link>
                    </ul>
                    <router-link tag="li" to="/" href="#" class="footer-logo">
                        <img src="../../assets/images/logo.png" alt="">
                    </router-link>
                    <div class="footer-social">
                        <router-link to="/" tag="a" href="tel:+998911234567" class="footer-social-phone">
                            <span>{{langFile.phone}}:</span>+998 90 123 45
                            76
                        </router-link>
                        <div class="footer-social-wrap">
                            <router-link tag="a" to="/" class="footer-social-item">
                                <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24"
                                     width="512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
                                </svg>
                            </router-link>
                            <router-link tag="a" to="/" class="footer-social-item">
                                <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m123.195312 260.738281 63.679688 159.1875 82.902344-82.902343 142.140625 112.976562 100.082031-450-512 213.265625zm242.5-131.628906-156.714843 142.941406-19.519531 73.566407-36.058594-90.164063zm0 0"/>
                                </svg>
                            </router-link>
                            <router-link tag="a" to="/" class="footer-social-item">
                                <svg height="511pt" viewBox="0 0 511 511.9" width="511pt"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/>
                                    <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/>
                                    <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--FOOTER END-->
        <div class="connect">
            <div class="container">
                <div class="connect-wrap">
                    <div class="connect-item">
                        <p class="connect-text">© Imba</p>
                    </div>
                    <div class="connect-item">
                        <p class="connect-text">2020 - Web developed by <a href="#">SOS Group</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            showLangList: false,
        }),
        components: {},
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
        methods: {
            changeLanguage(lang) {
                this.$store.dispatch('changeLang', lang);
            }
        }
    }
</script>
<style lang="css" scoped>

</style>