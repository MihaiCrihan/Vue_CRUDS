<script>
import rules from "@/plugins/rules.js"
import axios from "axios";

export default {
  name: "create",

  data: () => ({
    model: {},
    items: [],
    roles: [],
    rules
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const [response, roles] = await Promise.all([
          axios.get('http://localhost:3000/users'),
          axios.get('http://localhost:3000/roles')
        ]);
        this.model = response.data
        this.model.id = this.items.length
        this.roles = roles.data
      } catch (e) {
        console.log(e)
      }
    },

    async updateData() {
      try {
        await this.axios.post('http://localhost:3000/users',
            {
              id: this.model,
              name: this.model.name,
              phone: this.model.phone,
              email: this.model.email,
              password: this.model.password,
              role: this.model.role
            });
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
        v-model="model.phone"
        class="mx-8"
        label="Phone"
    ></v-text-field>
    <v-text-field
        v-model="model.email"
        class="mx-8"
        label="Email"
    ></v-text-field>
    <v-text-field
        v-model="model.password"
        class="mx-8"
        label="Password"
    ></v-text-field>
    <v-select
        v-model="model.role"
        :items="roles"
        item-value="id"
        item-text="name">
    </v-select>
    <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
    <v-btn class="mr-8" text @click="$router.push('/users')">Cancel</v-btn>
  </div>
</template>

<style scoped>

</style>