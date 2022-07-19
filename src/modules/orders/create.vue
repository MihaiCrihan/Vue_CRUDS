<script>

export default {
  name: "create",

  data: () => ({
    model: {
      totalSum: 0
    },
    items: [],
    orders: [],
    goods: [],
    prices: []
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      this.axios.get('http://localhost:3000/orders').then((response) => {
        this.items = response.data;
        this.model.id = this.items.length
      })
      this.axios.get('http://localhost:3000/goods').then((response) => {
        this.goods = response.data;
      })
    },

    getSelectedData() {
      for (const idKey in this.model.orderedGoods) {
        this.prices.push(this.goods.find(x => x.id === this.model.orderedGoods[idKey]).price)
        // console.log(this.goods.find(x => x.id === this.model.orderedGoods[idKey]).price);
      }
      this.prices.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          this.model.totalSum
      );
      console.log(this.model.totalSum)

    },

    async updateData() {
      await this.axios.post('http://localhost:3000/orders',
          {
            id: this.model.id,
            orderedGoods: this.model.orderedGoods,
            totalSum: this.model.totalSum,
          });
      alert("Added successful");
      await this.loadData();
      this.model.totalSum = null;
      this.model.orderedGoods = null;
    }
  }
}
</script>

<template>
  <div class="d-flex align-center pt-8">
    <v-select
        v-model="model.orderedGoods"
        :items="goods"
        :menu-props="{ maxHeight: '400' }"
        label="Select goods"
        multiple
        class="mr-6"
        item-value="id"
        item-text="name"
        hint="Pick goods"
        persistent-hint
        @change="getSelectedData()"
    ></v-select>
<!--    {{ model.totalSum }}-->
    {{this.model.orderedGoods}}
    <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
    <v-btn class="mr-8" text @click="$router.push('/orders')">Cancel</v-btn>
  </div>
</template>

<style scoped>

</style>