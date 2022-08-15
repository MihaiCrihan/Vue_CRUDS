<script>
import rules from "@/services/rules";

export default {
  name: "create",

  data: () => ({
    model: {},
    items: [],
    rules
  }),

  methods: {
    async updateData() {
      try {
        if ((this.$refs.form).validate()) {
          await this.axios.post('http://localhost:3000/roles', this.model);
          console.log("Added successful");
          this.model = {};
        }
      } catch (e) {
        console.log(e)
      }
    },

    back() {
      this.$router.push("/roles")
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
          hide-details="auto"
          :rules="[rules.required(), rules.name()]"
      ></v-text-field>
      <v-text-field
          v-model="model.alias"
          class="mx-8"
          label="Alias"
          hide-details="auto"
          :rules="[rules.required()]"
      ></v-text-field>
      <v-btn class="mx-8 success" @click="updateData">Save</v-btn>
      <v-btn class="mx-8" text @click="back">Cancel</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>