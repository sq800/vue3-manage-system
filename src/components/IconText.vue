<script setup>
import { computed } from '@vue/reactivity';
import { isUndefined } from 'lodash';

defineProps(['icon', 'text'])

</script>
<template>
    <span class="align">
        <el-icon>
            <component :is="icon"></component>
        </el-icon>
        <span class="mar">{{ text }}</span>
        <!-- <span style="font-size: 12px;">11111</span> -->
    </span>
</template>
<style scoped>
.align{
    display: flex;
    justify-content: center;
    align-items: center;
}
.mar{
    margin-left: 3px;
}
</style>