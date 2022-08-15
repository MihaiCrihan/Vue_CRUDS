<script>
import rules from "@/services/rules";

export default {
  name: "create",

  data: () => ({
    model: {
      totalSum: 0
    },
    items: [],
    orders: [],
    goods: [],
    prices: [],
    rules
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const [goods] = await Promise.all([
          this.axios.get('http://localhost:3000/goods')
        ])
        this.goods = goods.data
      } catch (e) {
        console.log(e)
      }
    },

    calcSum() {
      this.prices.splice(0, this.prices.length);
      for (const items in this.model.orderedGoods) {
        this.prices.push(this.goods.find(x => x.id === this.model.orderedGoods[items]).price)
      }
      if (this.prices.length) {
        this.model.totalSum = this.prices.reduce((prev, next) => prev + next)
      } else {
        this.model.totalSum = 0
      }
    },

    async updateData() {
      try {
        if ((this.$refs.form).validate()) {
          await this.axios.post('http://localhost:3000/orders', this.model);
          alert("Added successful");
          await this.loadData();
          this.model = []
        }
      } catch (e) {
        console.log(e)
      }
    },

    back() {
      this.$router.push('/orders')
    }
  }
}
</script>

<template>
  <v-form ref="form" lazy-validation>
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
          :rules="[rules.select()]"
          @change="calcSum()"
      ></v-select>
      {{ model.totalSum }}
      <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
      <v-btn class="mr-8" text @click="back">Cancel</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>