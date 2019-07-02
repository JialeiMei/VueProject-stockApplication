<template>
    <div>
        <div class="q-pa-md items-start q-gutter-md">
            <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">
                        {{ stock.name }}
                    </div>
                    <div class="text-subtitle3">
                        (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
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
                            :class="{danger: insufficientQuantity}"
                    />
                    <q-btn
                            push
                            color="teal-4"
                            text-color="white"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    >
                       {{ insufficientQuantity ? 'Not enough Stocks' : 'Sell'}}
                    </q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order ={
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style>
    .danger {
        border: 1px solid red;
        border-radius: 5px;
        margin: -1px;
    }
</style>