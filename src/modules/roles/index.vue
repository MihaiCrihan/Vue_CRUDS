<script>
export default {
  name: "index",

  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Alias',
        align: 'start',
        sortable: false,
        value: 'alias',
      },
      {
        text: 'Actions',
        align: 'end',
        sortable: false,
        value: 'actions',
      }
    ],
    items: [],
    confirmDeletion: false,
    selectedElement: null
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async deleteRow() {
      try {
        await this.axios.delete(`http://localhost:3000/roles/${this.selectedElement}`)
        this.confirmDeletion = false;
        await this.loadData();
      } catch (e) {
        console.log(e)
      }
    },

    async loadData() {
      try {
        const response = await this.axios.get('http://localhost:3000/roles')
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },

    getForEdit(item) {
      this.$router.push(`/roles/edit/${item.id}`)
    },

    openModal(id) {
      this.confirmDeletion = true;
      this.selectedElement = id;
    }
  }
}
</script>

<template>
  <div class="pa-6">
    <div class="d-flex">
      <h1 class="mb-4">Roles</h1>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push(`/roles/create`)">Add role</v-btn>
    </div>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="15"
        class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.alias }}</td>
          <td class="text-right">
            <v-btn @click="getForEdit(row.item)" class="mx-2" icon x-small>
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
                @click="openModal(row.item.id)"
                class="mx-2"
                icon
                x-small
                color="pink">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog
        v-model="confirmDeletion"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete this item ?
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="green darken-1"
              text
              @click="confirmDeletion = false"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="deleteRow"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>