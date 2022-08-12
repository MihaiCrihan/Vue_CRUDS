<script>
export default {
  name: "edit.vue",

  data: () => ({
    model: {},
    roles: [],
    goods: [],
    prices: []
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    loadData() {
      this.axios.get(`http://localhost:3000/orders/${this.$route.params.id}`).then((response) => {
        this.model = response.data;
      })
      this.axios.get('http://localhost:3000/goods').then((response) => {
        this.goods = response.data;
      })
    },

    async submit() {
      await this.axios.patch(`http://localhost:3000/orders/${this.$route.params.id}`,
          {
            id: this.model.id,
            orderedGoods: this.model.orderedGoods,
            totalSum: this.model.totalSum,
          });
      alert("Added successful");
      await this.loadData();
      this.model.totalSum = null;
      this.model.orderedGoods = null;
    },

    calcSum() {
      this.prices.splice(0, this.prices.length);
      for (const items in this.model.orderedGoods) {
        this.prices.push(this.goods.find(x => x.id === this.model.orderedGoods[items]).price)
      }
      this.model.totalSum = this.prices.reduce((prev, next) => prev + next)
    },
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
        @change="calcSum()"
    ></v-select>
    {{model.totalSum}}
    <v-btn class="mx-8 success" @click="submit">Save</v-btn>
  </div>
</template>

<style scoped>

</style>