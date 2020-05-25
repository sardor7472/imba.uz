<template>
    <div>
        <!--MAIN BEGIN-->
        <div class="main">
            <div class="container">
                <div class="form-send">
                    <form class="form-send-block">
                        <input type="text" class="form-send-block-input" :placeholder="langFile.fio">
                        <input type="text" class="form-send-block-input" :placeholder="langFile.phone">
                        <v-select :options="options" aria-placeholder="langFile.region"></v-select>
                    </form>
                    <div class="form-send-item">
                        <input type="text" class="form-send-block-input" :placeholder="langFile.address">
                    </div>
                </div>
                <div class="payment">
                    <h4 class="payment-title">{{langFile.formpayment}}</h4>
                    <div class="payment-wrap">
                        <div class="payment-element">
                            <div class="payment-radio-box">
                                <input type="radio" class="payment-radio-box-input" id="1" name="Imba">
                                <label for="1" id="checkbox"></label>
                            </div>
                            <label for="1">{{langFile.cashterminal}}</label>
                        </div>
                        <div class="payment-element">
                            <div class="payment-radio-box">
                                <input type="radio" class="payment-radio-box-input" id="2" name="Imba">
                                <label for="2"></label>
                            </div>
                            <label for="2">Click</label>
                        </div>
                        <div class="payment-element">
                            <div class="payment-radio-box">
                                <input type="radio" class="payment-radio-box-input" id="3" name="Imba">
                                <label for="3"></label>
                            </div>
                            <label for="3">Payme</label>
                        </div>
                        <div class="payment-element">
                            <div class="payment-radio-box">
                                <input type="radio" class="payment-radio-box-input" id="4" name="Imba">
                                <label for="4"></label>
                            </div>
                            <label for="4">Visa</label>
                        </div>
                    </div>
                    <button type="button" class="payment-button">{{langFile.checkout}}</button>
                </div>
                <div class="payment-info">
                    <h4 class="payment-title">{{langFile.productsorder}}</h4>
                    <div class="payment-info-item">
                        <h4 class="payment-info-item-title">Товаров 2:</h4>
                        <p class="payment-info-price"><span>30 000 </span>сум</p>
                    </div>
                    <div class="payment-info-item">
                        <h4 class="payment-info-item-title">Итого к оплате:</h4>
                        <p class="payment-info-price"><span>30 000 </span>сум</p>
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
            options: ["lfdslk", "sdfshfk","fhkdfhkds"],
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

    .v-select.vs--single.vs--searchable{
        width: 360px;
        background: #fff;
    }

</style>