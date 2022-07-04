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
      this.axios.get(`http://localhost:3000/users/${this.$route.params.id}`).then((response) => {
        this.model = response.data;
      })
      this.axios.get('http://localhost:3000/roles').then((response) => {
        this.roles = response.data;
      })
    },

    submit() {
      this.axios.patch(`http://localhost:3000/users/${this.$route.params.id}`,
          {
            name: this.model.name,
            phone: this.model.phone,
            email: this.model.email,
            password: this.model.password,
            role: this.model.role
          });
      alert("Edited successful");
      this.$router.push('/users');
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