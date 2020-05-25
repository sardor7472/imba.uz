<template>
    <div class="menu-modal" v-show="showModal" @click="closeModal()">
        <div class="section-first-menu card-menu">
            <div class="section-first-block">
                <h4 class="section-first-block-title">Все категории</h4>
                <button type="button" class="section-first-block-icon" @click="closeModal()">
                    <img src="../assets/images/x.png" alt="">
                </button>
            </div>
            <div class="section-first-menu-item">
                <p>Овощи</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></router-link>
                    <router-link tag="li" to="/" class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></router-link>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Вода</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Яйца</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Мясо</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Сувениры</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Бижутерия </p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Цветы живые </p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Игрушки для детей </p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Канцтовары </p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
            <div class="section-first-menu-item">
                <p>Посуда для дома</p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;"
                     xml:space="preserve">
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                </svg>
                <ul class="sub-menu">
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Все</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Соки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Квас, Морс</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Вода</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Газированные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Прохладительные напитки</a></li>
                    <li class="sub-menu-item"><a href="#" class="sub-menu-link">Энергетические напитки</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["showModal"],
        data: () => ({

        }),
        methods:{
            closeModal() {
                this.showModal = false
                this.$emit('closeModalComponent',this.showModal)

            }
        },
        computed:{

        }
    }
</script>
<style lang="css" scoped>

</style>