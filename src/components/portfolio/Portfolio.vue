<template>
    <div style="display: flex;" class="row">

        <app-stock v-for="stock in stocks" :key="stock.id" class="col-md-4 col-xs-6" :stock="stock"></app-stock>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>