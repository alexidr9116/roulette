<template>
    <div id="info-panel" class="app-toast text-right w-1/2 md:w-1/3 h-[76px] md:h-[15.95vh]" v-if="showMessage">
        <h3 class="pr-4">{{ title }}</h3>
        <div v-html="message" class="pr-4"></div>
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
    background: rgba(121, 115, 115, 0.5);
    background: linear-gradient(90deg,
            rgba(184, 182, 182, 0.5) 0%,
            rgba(75, 74, 74, 0.5) 100%);
   
    position: absolute;
    top: 10px;
    color: #fff;
    border-radius: 0 3vh 7vh 0;
    padding: 2vh 1vh;
    z-index: 0;
    opacity: 0;
     
    animation: 5s ease 0s normal forwards  1 toast;
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