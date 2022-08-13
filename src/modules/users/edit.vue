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
        const [response, roles] = await Promise.all([
          this.axios.get(`http://localhost:3000/users/${this.$route.params.id}`),
          this.axios.get('http://localhost:3000/roles')
        ]);
        this.model = response.data
        this.roles = roles.data
      } catch (e) {
        console.log(e)
      }
    },

    async submit() {
      try {
        await this.axios.patch(`http://localhost:3000/users/${this.$route.params.id}`, this.model);
        alert("Edited successful");
        await this.$router.push('/users');
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
        v-model="model.phone"
        class="mx-8"
        label="Phone"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        v-model="model.email"
        class="mx-8"
        label="Email"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        v-model="model.password"
        class="mx-8"
        label="Password"
        hide-details="auto"
    ></v-text-field>
    <v-select
        v-model="model.role"
        :items="roles"
        hide-details="auto"
        item-value="id"
        item-text="name">
    </v-select>
    <v-btn class="mx-8 success" @click="submit">Save</v-btn>
  </div>
</template>

<style scoped>

</style>