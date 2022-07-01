<script>
export default {
    data() {
        return {
            message: 0,
            isClick: true
        }
    },
    methods: {
        click() {
            this.isClick = !this.isClick;
            if (this.isClick) {
                this.message = "click";
            } else {
                this.message = "click again";
            }
        }
    }

}

</script>
<template>
    <div>
        <button @click="click">ClickMe</button>
        <div>{{ message }}</div>
    </div>

</template>
<style>
</style>