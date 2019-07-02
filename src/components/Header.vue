<template>
    <div>
        <div class="q-pa-md">
            <q-toolbar class="bg-blue-grey glossy text-white shadow-2 rounded-borders">

                <q-btn stretch flat to="/" label="Stock Trader" />

                <q-tabs shrink>
                    <q-route-tab name="portfolio" to="/portfolio" style="font-size: 12px">
                        Portfolio
                    </q-route-tab>
                    <q-route-tab name="stock" to="/stocks" style="font-size: 12px">
                        Stocks
                    </q-route-tab>
                </q-tabs>

                <q-space />

                <q-btn stretch flat style="font-size: 12px" @click="endDay">End Day</q-btn>

                <q-btn-dropdown stretch flat label="Save & Load" style="font-size: 12px">
                    <q-list>
                        <q-item clickable v-close-popup @click="saveData">
                            <q-item-section avatar>
                                <q-avatar icon="save" color="indigo-3" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Save Data</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="loadData">
                            <q-item-section avatar>
                                <q-avatar icon="folder" color="indigo-3" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Load Data</q-item-label>
                            </q-item-section>
                        </q-item>

                    </q-list>
                </q-btn-dropdown>
                <q-item style="display: flex; align-items: center; margin-top: -3px;">
                    <strong>Funds: {{ funds | currency }}</strong>
                </q-item>


            </q-toolbar>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {

        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>