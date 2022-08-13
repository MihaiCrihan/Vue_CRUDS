<template>
<div>
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

<script>
export default {
  name: "DeletionModal"
}
</script>

<style scoped>

</style>