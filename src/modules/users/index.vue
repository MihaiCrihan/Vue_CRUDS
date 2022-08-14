<script>
import axios from "axios";

export default {
  name: "index",

  data: () => ({
    model: [],
    confirmDeletion: false,
    selectedElement: null,
    roles: [],
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      {
        text: "Phone",
        align: "start",
        sortable: false,
        value: "phone"
      },
      {
        text: "Email",
        align: "start",
        sortable: false,
        value: "email"
      },
      {
        text: "Password",
        align: "start",
        sortable: false,
        value: "password"
      },
      {
        text: "Role",
        align: "start",
        sortable: false,
        value: "role"
      },
      {
        text: "Actions",
        align: "end",
        sortable: false,
        value: "actions"
      }
    ],
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
        this.roles = roles.data
      } catch (e) {
        console.log(e)
      }
    },

    getForEdit(item) {
      this.$router.push(`/users/edit/${item.id}`)
    },

    showRole(currentId) {
      return this.roles.find(({id}) => id === currentId)?.name
    },

    async deleteRow() {
      try {
        await this.axios.delete(`http://localhost:3000/users/${this.selectedElement}`);
        this.confirmDeletion = false;
        await this.loadData();
      } catch (e) {
        console.log(e)
      }
    },

    openModal(id) {
      this.confirmDeletion = true;
      this.selectedElement = id;
    },

    create () {
      this.$router.push(`/users/create`)
    }
  }
}
</script>

<template>
  <div class="pa-6">
    <div class="d-flex">
      <h1 class="mb-4">Users</h1>
      <v-spacer></v-spacer>
      <v-btn @click="create">Add user</v-btn>
    </div>
    <v-data-table
        :headers="headers"
        :items="model"
        :items-per-page="15"
        class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.phone }}</td>
          <td>{{ row.item.email }}</td>
          <td>{{ row.item.password }}</td>
          <td>{{ showRole(row.item.role) }}</td>
          <td class="text-right">
            <v-btn @click="getForEdit(row.item)" class="mx-2" icon x-small>
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
<!--            <v-dialog-->
<!--                v-model="confirmDeletion"-->
<!--                persistent-->
<!--                max-width="290"-->
<!--            >-->
<!--              <template v-slot:activator="{ on, attrs }">-->
<!--                <v-btn-->
<!--                    v-bind="attrs"-->
<!--                    v-on="on"-->
<!--                    class="mx-2"-->
<!--                    icon-->
<!--                    x-small-->
<!--                    color="pink">-->
<!--                  <v-icon dark>mdi-delete</v-icon>-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <v-card>-->
<!--                <v-card-title class="text-h5">-->
<!--                  Are you sure you want to delete this item ?-->
<!--                </v-card-title>-->
<!--                <v-card-actions>-->
<!--                  <v-btn-->
<!--                      color="green darken-1"-->
<!--                      text-->
<!--                      @click="confirmDeletion = false"-->
<!--                  >-->
<!--                    Cancel-->
<!--                  </v-btn>-->
<!--                  <v-spacer></v-spacer>-->
<!--                  <v-btn-->
<!--                      color="green darken-1"-->
<!--                      text-->
<!--                      @click="deleteRow(row.item)"-->
<!--                  >-->
<!--                    Confirm-->
<!--                  </v-btn>-->
<!--                </v-card-actions>-->
<!--              </v-card>-->
<!--            </v-dialog>-->
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