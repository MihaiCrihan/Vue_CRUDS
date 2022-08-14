<script>
import rules from "@/services/rules";

export default {
  name: "create",

  data: () => ({
    model: {},
    items: [],
    rules
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get('http://localhost:3000/goods');
        this.items = response.data;
        this.model.id = this.items.length;
      } catch (e) {
        console.log(e)
      }
    },

    async createData() {
      try {
        if ((this.$refs.form).validate()) {
          await this.axios.post('http://localhost:3000/goods', this.model)
          alert("Added successful");
          await this.loadData();
          this.model = {}
        }
      } catch (e) {
        console.log(e)
      }
    },

    back() {
      this.$router.push('/goods')
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
          v-model.number="model.price"
          class="mx-8"
          label="Price"
          :rules="[rules.required()]"
      ></v-text-field>
      <v-text-field
          v-model="model.photo"
          class="mx-8"
          label="Photo"
          :rules="[rules.required()]"
      ></v-text-field>
      <v-text-field
          v-model="model.description"
          class="mx-8"
          label="Description"
          :rules="[rules.required()]"
      ></v-text-field>
      <v-btn class="mx-8 success" @click="createData">Save</v-btn>
      <v-btn class="mr-8" text @click="back">Cancel</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>