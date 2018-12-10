<template>
    <span>{{yuan}}</span>
</template>

<script>
    export default {
        name: "TMoney",
        props: ['value'],
        computed: {
            yuan() {
                if (this.value == null) {
                    return null;
                }

                let yuan = (this.value / 100).toFixed(2);

                return yuan;
            }
        }
    }
</script>
