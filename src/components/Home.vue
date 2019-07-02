<template>
  <div class="q-pa-md">

        <h3>Trade or View your Portfolio</h3>
        <p style="font-size: 16px; line-height: 0px">You may Save & Load your Data</p>
        <p style="font-size: 16px;">Click on 'End Day' to begin a New Day!</p>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
