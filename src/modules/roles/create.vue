<script>
export default {
  name: "create",

  data: () => ({
    model: {
      id: null,
      name: null,
      alias: null
    },
    items: []
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get('http://localhost:3000/roles')
        this.items = response.data;
        this.model.id = this.items.length
      } catch (e) {
        console.log(e)
      }
    },

    async updateData() {
      try {
        await this.axios.post('http://localhost:3000/roles',
            {
              id: this.model.id,
              name: this.model.name,
              alias: this.model.alias
            });
        console.log("Added successful");
        await this.loadData();
        this.model = {};
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
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        v-model="model.alias"
        class="mx-8"
        label="Alias"
        hide-details="auto"
    ></v-text-field>
    <v-btn class="mx-8 success" @click="updateData">Save</v-btn>

  </div>
</template>

<style scoped>

</style>