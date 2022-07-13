<template>
    <div class="app-toast p-1 lg:p-2 w-3/4 md:w-1/3    flex-col items-between hidden md:flex"
        :class="message == '' ? 'justify-center' : 'justify-between'" v-if="showMessage">
        <div class="pr-8 w-full text-right">
            <h3 class="md:text-xl font-bold">{{ title }}</h3>
        </div>

        <div class="pr-4 flex " v-if="message !== ''">
            <div class="w-1/3 md:flex-0">

            </div>
            <div v-if="message !== ''" v-html="message" class="w-2/3 md:flex-1 justify-end flex text-sm md:text-base">

            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AppToast",
    mounted() {

    },
    props: {
        showMessage: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: '<p></p>',
        },
        title: {
            type: String,
            default: '',
        },
    },


}
</script>
<style scoped>
.app-toast {
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.5) 15%,
            rgba(0, 0, 0, 0.5) 100%);
    width: 26vh;
    height: 7.87vh;
    position: absolute;
    top: 12px;
    color: #fff;
    border-radius: 0 3vh 7vh 0;
    z-index: 50;
    opacity: 0;
    height: 15vh;
    width: 300px;
    animation: 7s ease 0s normal forwards 1 toast;
}

@media (min-height: 56.25vw) and (max-width: 177.8vh) {
    .app-toast {
        top: 12px;
        height: 70px;
        width: 210px;
    }
}

@keyframes toast {
    0% {
        left: -33%;
        opacity: 0
    }

    25% {
        left: 0px;
        opacity: 1
    }

    75% {
        left: 0px;
        opacity: 1
    }

    100% {
        left: -33%;
        opacity: 0
    }
}
</style>