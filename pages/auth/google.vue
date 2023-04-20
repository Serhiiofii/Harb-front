<template></template>

<script>
export default {
    mounted() {
        let searchParams = null;
        const fullPath = this.$route.fullPath;
        searchParams = (fullPath.split("google?"))[1];

        this.$axios.$get(`auth/callback?${searchParams}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    },
}

</script>