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
    loadData() {
      this.axios.get(`http://localhost:3000/goods/${this.$route.params.id}`).then((response) => {
        this.model = response.data;
      })
    },

    submit() {
      this.axios.patch(`http://localhost:3000/goods/${this.$route.params.id}`,
          {
            name: this.model.name,
            price: this.model.price,
            photo: this.model.photo,
            description: this.model.description,
          });
      alert("Edited successful");
      this.$router.push('/goods');
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