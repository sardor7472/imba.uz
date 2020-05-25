<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <ul class="about-link-menu">
                    <router-link tag="li" to="/" class="about-link-menu-item cur-p">{{langFile.home}}</router-link>
                    <li class="about-link-menu-item active">{{langFile.about}}</li>
                </ul>
                <div class="about-block">
                    <div class="about-block-img">
                        <img src="../assets/images/about.png" alt="">
                    </div>
                    <div class="about-block-text">
                        <h4 class="about-block-text-title">О нашей компании</h4>
                        <p class="about-block-text-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="about-connect">
                    <div class="about-connect-item">
                        <p class="about-connect-item-title">{{langFile.phone}}:</p>
                        <a href="tel:+998901234567" class="about-connect-item-number">+998901234567</a>
                    </div>
                    <div class="about-connect-item">
                        <p class="about-connect-item-title">{{langFile.email}}:</p>
                        <div class="about-connect-item-email">info@imba.uz</div>
                    </div>
                    <div class="about-connect-item">
                        <p class="about-connect-item-title">{{langFile.socialnetworks}}:</p>
                        <div class="footer-social-block">
                            <router-link tag="a" to="/" class="footer-social-item">
                                <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"
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
                                <svg height="511pt" viewBox="0 0 511 511.9" width="511pt" xmlns="http://www.w3.org/2000/svg">
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
        <!--MAIN END-->
    </div>

</template>
<script>
    export default {
        data: () => ({
        }),
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