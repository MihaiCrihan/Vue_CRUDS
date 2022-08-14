<script>
export default {
  name: "edit.vue",

  data: () => ({
    model: {
      orderedGoods: []
    },
    roles: [],
    goods: [],
    prices: []
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const [response, goods] = await Promise.all([
          this.axios.get(`http://localhost:3000/orders/${this.$route.params.id}`),
          this.axios.get('http://localhost:3000/goods')
        ])
        this.model = response.data;
        this.goods = goods.data;
      } catch (e) {
        console.log(e)
      }
    },

    async submit() {
      try {
        await this.axios.patch(`http://localhost:3000/orders/${this.$route.params.id}`, this.model);
        alert("Added successful");
        await this.loadData();
      } catch (e) {
        console.log(e)
      }
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