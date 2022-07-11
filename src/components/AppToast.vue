<template>
    <div class="app-toast p-1 lg:p-2 w-3/4 md:w-1/3   flex flex-col items-between justify-between" v-if="showMessage">
        <div class="pr-8 w-full text-right">
            <h3 class="text-xl font-bold">{{ title }}</h3>
        </div>
        
        <div class="pr-4 flex ">
            <div class="w-1/3 md:flex-0">

            </div>
            <div v-html="message" class="w-2/3 md:flex-1 justify-end flex">
                
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
    background: rgba(121, 115, 115, 0.5);
    background: linear-gradient(90deg,
            rgba(184, 182, 182, 0.5) 0%,
            rgba(75, 74, 74, 0.5) 100%);
    position: absolute;
    top: 10px;
    color: #fff;
    border-radius: 0 3vh 7vh 0;
    z-index: 50;
    opacity: 0;
    height:15.95vh;
    animation: 7s ease 0s normal forwards  1 toast;
}
@media (min-height: 56.25vw) and (max-width: 177.8vh) {
  .app-toast{
    height: 76px;
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