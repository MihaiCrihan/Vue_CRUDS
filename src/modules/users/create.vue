<script>
import rules from "@/services/rules.js"

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
        const [ roles ] = await Promise.all([
          this.axios.get('http://localhost:3000/roles')
        ]);
        this.roles = roles.data
      } catch (e) {
        console.log(e)
      }
    },

    async createData() {
      try {
        if ((this.$refs.form).validate()) {
          await this.axios.post('http://localhost:3000/users',
              {
                ...this.model
              });
          alert("Added successful");
          await this.loadData();
          this.model = {}
        }

      } catch (e) {
        console.log(e)
      }
    },

    back() {
      this.$router.push('/users')
    }
  }
}
</script>

<template>
  <v-form ref="form" lazy-validation>
    <div class="d-flex align-center pt-8">
      <v-text-field
          v-model="model.name"
          class="mx-8"
          label="Name"
          :rules="[rules.required(), rules.name()]"
      ></v-text-field>
      <v-text-field
          v-model="model.phone"
          class="mx-8"
          label="Phone"
          :rules="[rules.required(), rules.phone()]"
      ></v-text-field>
      <v-text-field
          v-model="model.email"
          class="mx-8"
          label="Email"
          :rules="[rules.email(), rules.required()]"
      ></v-text-field>
      <v-text-field
          v-model="model.password"
          class="mx-8"
          label="Password"
          :rules="[rules.required(), rules.min(6)]"
      ></v-text-field>
      <v-select
          v-model="model.role"
          :items="roles"
          item-value="id"
          item-text="name"
          :rules="[rules.required()]"
      ></v-select>
      <v-btn class="mx-8 success" @click="createData">Save</v-btn>
      <v-btn class="mr-8" text @click="back">Cancel</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>