<template>
    
</template>
<script>
export default {
    created() {
        this.$store.dispatch('destroyToken')
        .then(res=>{
            this.$router.push({name:'login'});
        });
    },
}
</script>