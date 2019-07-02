<template>
    <div>
        <div class="q-pa-md items-start q-gutter-md">
            <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">
                        {{ stock.name }}
                    </div>
                    <div class="text-subtitle3">
                        (Price: {{ stock.price }})
                    </div>
                </q-card-section>

                <q-separator />

                <q-card-actions style="padding: 15px; justify-content: space-between">
                    <q-input
                            v-model.number="quantity"
                            type="number"
                            outlined
                            placeholder="Quantity"
                            dense
                            :class= "{danger: insufficientFunds}"

                    />
                    <q-btn
                            push
                            color="indigo-4"
                            text-color="white"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    >
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
                    </q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds(){
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order ={
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };

                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
        border-radius: 5px;
        margin: -1px;
    }
</style>