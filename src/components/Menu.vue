<template>
    <div class="border-2 cursor-pointer gap-2 rounded-lg border-gray-700 bg-black/80 p-2 flex flex-col w-48 md:w-60">
        <div class="flex gap-2 items-center">
            <Icon icon="charm:sound-up" width="40"></Icon>
            <h3>Mute</h3>
        </div>
        <div class="flex gap-2 items-center">
            <Icon icon="ant-design:fullscreen-outlined" width="40"></Icon>
            <h3>Full Screen</h3>
        </div>
        <div class="flex gap-2 items-center">
            <Icon icon="ion:help-sharp" width="40"></Icon>
            <h3>Help</h3>
        </div>
        <div class="flex gap-2 items-center">
            <Icon icon="bx:history" width="40"></Icon>
            <h3>History</h3>
        </div>
        <div class="flex gap-2 items-center">
            <Icon icon="bxs:sort-alt" width="40"></Icon>
            <h3>Table Limits</h3>
        </div>
        <div class="flex gap-2 items-center">
            <Icon icon="ep:setting" width="40"></Icon>
            <h3>Setting</h3>
        </div>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue2";

export default {
    name: "AppMenu",
    components: {
        Icon,
    }
}
</script>
<style scoped>
</style>