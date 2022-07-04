<script>
import rules from "@/plugins/rules.js"

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
    loadData() {
      this.axios.get('http://localhost:3000/users').then((response) => {
        this.items = response.data;
        this.model.id = this.items.length
      })
      this.axios.get('http://localhost:3000/roles').then((response) => {
        this.roles = response.data;
      })
    },

    async updateData() {
      await this.axios.post('http://localhost:3000/users',
          {
            id: this.model.id,
            name: this.model.name,
            phone: this.model.phone,
            email: this.model.email,
            password: this.model.password,
            role: this.model.role
          });
      alert("Added successful");
      await this.loadData();
      this.model.name = null;
      this.model.phone = null;
      this.model.email = null;
      this.model.password = null;
      this.model.role = null;
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
        :rules="[rules.required()]"
    ></v-text-field>
    <v-text-field
        v-model="model.phone"
        class="mx-8"
        label="Phone"
        :rules=[rules.higher(5)]
    ></v-text-field>
    <v-text-field
        v-model="model.email"
        class="mx-8"
        label="Email"
        :rules="[rules.required()]"
    ></v-text-field>
    <v-text-field
        v-model="model.password"
        class="mx-8"
        label="Password"
        :rules="[rules.required()]"
    ></v-text-field>
    <v-select
        v-model="model.role"
        :items="roles"
        item-value="id"
        item-text="name"
        :rules="[rules.required()]">
    </v-select>
    <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
  </div>
</template>

<style scoped>

</style>