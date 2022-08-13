<script>
export default {
  name: "edit.vue",

  data: () => ({
    model: {},
    roles: []
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get(`http://localhost:3000/goods/${this.$route.params.id}`)
        this.model = response.data;
      } catch (e) {
        console.log(e)
      }
    },

    async submit() {
      try {
        await this.axios.patch(`http://localhost:3000/goods/${this.$route.params.id}`,this.model);
        alert("Edited successful");
        await this.$router.push('/goods');
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
        v-model="model.price"
        class="mx-8"
        label="Phone"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        v-model="model.photo"
        class="mx-8"
        label="Email"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        v-model="model.description"
        class="mx-8"
        label="Password"
        hide-details="auto"
    ></v-text-field>
    <v-btn class="mx-8 success" @click="submit">Save</v-btn>
  </div>
</template>

<style scoped>

</style>