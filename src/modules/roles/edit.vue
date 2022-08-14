<script>
export default {
  name: "edit",

  data: () => ({
    model: {
      id: null,
      name: null,
      alias: null
    },
    items: []
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get(`http://localhost:3000/roles/${this.$route.params.id}`)
        this.model = response.data;
      } catch (e) {
        console.log(e)
      }
    },

    async submit() {
      try {
        await this.axios.patch(`http://localhost:3000/roles/${this.$route.params.id}`, this.model);
        alert("Edited successful");
      } catch (e) {
        console.log(e)
      }
    },

    back () {
      this.$router.push('/roles')
    }
  }
}
</script>

<template>
  <div>
    <div class="d-flex mx-8 mt-4">
      <h1>Edit role</h1>
      <v-spacer></v-spacer>
      <v-btn text @click="back">
        <v-icon>mdi-close</v-icon>
        <span>Cancel</span>
      </v-btn>
    </div>
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
      <v-btn class="mx-8 success" @click="submit">Save</v-btn>

    </div>
  </div>
</template>

<style scoped>

</style>