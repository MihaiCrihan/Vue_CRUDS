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
    items: [
      {
        id: "1",
        name: 'Admin',
        alias: 'Administrator',
      },
    ],
  }),

  methods: {
    onButtonClick(item) {
      console.log('click on ' + item.id)
    }
  }
}
</script>

<template>
  <div class="pa-6">
    <h1 class="mb-4">Roles</h1>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{row.item.name}}</td>
          <td>{{row.item.alias}}</td>
          <td class="text-right">
            <v-btn class="mx-2" icon x-small color="pink" @click="onButtonClick(row.item)">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" icon x-small color="pink" @click="onButtonClick(row.item)">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<style scoped>

</style>