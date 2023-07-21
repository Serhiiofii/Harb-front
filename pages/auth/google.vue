<template></template>

<script>
export default {
    mounted() {
        let searchParams = null;
        const fullPath = this.$route.fullPath;
        searchParams = (fullPath.split("google?"))[1];

        this.$axios.$get(`auth/callback?${searchParams}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                window.opener.postMessage(response);
                window.close();
            })
            .catch(error => {
                console.error(error);
            });
    },
}

</script>