<template>
    <div style="display: flex; " class="row">

        <app-stock v-for="stock in stocks" :key="stock.id" class="col-md-4 col-xs-6" :stock="stock"></app-stock>

    </div>
</template>

<script>
    import stock from './Stock';

    export default {

        components: {
            appStock: stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>