<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <div class="cabinet-main-top">
                    <router-link to="/" tag="a"  class="cabinet-main-top-menu" exact active-class="active">{{langFile.myprofile}}</router-link>
                    <router-link to="/cabinet" tag="a" class="cabinet-main-top-menu" active-class="active">{{langFile.myorders}}</router-link>
                </div>
                <div class="cabinet-order">
                    <h4 class="cabinet-order-title">{{langFile.myorders}}</h4>
                    <div class="cabinet-order-schudele">
                        <table>
                            <tr>
                                <th>{{langFile.ordernumber}}</th>
                                <th>{{langFile.date}}</th>
                                <th>{{langFile.status}}</th>
                                <th>{{langFile.customeraddress}}</th>
                                <th>{{langFile.paymentmethod}}</th>
                                <th>{{langFile.amount}}</th>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                            <tr>
                                <td>№123</td>
                                <td>01.02.2020</td>
                                <td>Доставлено</td>
                                <td>Ул. Садыка Азимова, 68</td>
                                <td>Терминал</td>
                                <td>30 000 сум</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="pagination">
                    <div class="pagination-arrow-left">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
               </svg>
                    </div>
                    <div class="pagination-number">1</div>
                    <div class="pagination-number active">2</div>
                    <div class="pagination-number">3</div>
                    <div class="pagination-arrow-right">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
               </svg>
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