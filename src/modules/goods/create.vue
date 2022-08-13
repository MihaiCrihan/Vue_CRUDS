<script>

export default {
  name: "create",

  data: () => ({
    model: {},
    items: [],
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get('http://localhost:3000/goods');
        this.items = response.data;
        this.model.id = this.items.length;
      } catch (e) {
        console.log(e)
      }
    },

    async updateData() {
      try {
        await this.axios.post('http://localhost:3000/goods',
            {
              id: this.model.id,
              name: this.model.name,
              price: Number(this.model.price),
              //todo how to send number?
              photo: this.model.photo,
              description: this.model.description,
            })
        alert("Added successful");
        await this.loadData();
        this.model = {}
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<template>
  <div class="d-flex align-center pt-8">
    <v-text-field
        v-model="model.name"
        class="mx-8"
        label="Name"
    ></v-text-field>
    <v-text-field
        v-model="model.price"
        class="mx-8"
        label="Price"
    ></v-text-field>
    <v-text-field
        v-model="model.photo"
        class="mx-8"
        label="Photo"
    ></v-text-field>
    <v-text-field
        v-model="model.description"
        class="mx-8"
        label="Description"
    ></v-text-field>
    <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
    <v-btn class="mr-8" text @click="$router.push('/goods')">Cancel</v-btn>
  </div>
</template>

<style scoped>

</style>