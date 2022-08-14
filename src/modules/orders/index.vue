<script>
export default {
  name: "index",

  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      {
        text: 'Goods',
        align: 'start',
        sortable: false,
        value: 'goods',
      },
      {
        text: 'Total Sum',
        align: 'start',
        sortable: false,
        value: 'totalSum',
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
    selectedElement: null,
    photo: null,
    url: null,
    goods: [],
    goodsList: null,
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async deleteRow() {
      try {
        await this.axios.delete(`http://localhost:3000/orders/${this.selectedElement}`)
        this.confirmDeletion = false;
        await this.loadData();
      } catch (e) {
        console.log(e)
      }
    },

    async loadData() {
      try {
        const [items, goods] = await Promise.all([
          this.axios.get('http://localhost:3000/orders'),
          this.axios.get('http://localhost:3000/goods')
        ]);
        this.items = items.data
        this.goods = goods.data
      } catch (e) {
        console.log(e)
      }
    },

    getForEdit(item) {
      this.$router.push(`/orders/edit/${item.id}`)
    },

    openModal(id) {
      this.confirmDeletion = true;
      this.selectedElement = id;
    },

    getData(id) {
      return this.goods.find(x => x.id === id)
    },

    create () {
      this.$router.push(`/orders/create`)
    }
  }
}
</script>

<template>
  <div class="pa-6">
    <div class="d-flex">
      <h1 class="mb-4">Orders</h1>
      <v-spacer></v-spacer>
      <v-btn @click="create">Add order</v-btn>
    </div>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="15"
        class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.id }}</td>
          <td>
            <div v-for="(id, index) in row.item.orderedGoods" :key="index" class="d-flex align-center mb-2">
              <img v-if="getData(id)" width="50" height="50" :src="getData(id).photo" alt="photo">
              <span v-if="getData(id)" class="mx-3">{{ getData(id).name }}</span>
              <v-spacer></v-spacer>
              <strong v-if="getData(id)">{{ getData(id).price }} &euro;</strong>
            </div>
          </td>
          <td><strong>{{ row.item.totalSum }} &euro;</strong></td>
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