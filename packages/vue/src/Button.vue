<template>
    <div></div>
</template>

<script lang="ts">
import * as pureUi from "pure-ui";
export default {
    props: {
        type: String,
    },
    data: function () {
        return {
            button: undefined as unknown
        }
    },
    mounted() {
        const button = new pureUi.Button({
            target: this.$el,
            props: this.$props,
        })
        button.$on('click', (e) => {
            this.$emit('change', e.detail.value)
        })
        this.$data.button = button
    },

};
</script>

