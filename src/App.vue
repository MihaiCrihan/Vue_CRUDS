<script>
import NavigationDrawer from "@/components/NavigationDrawer";

export default {
  name: 'App',

  components: {
    NavigationDrawer
  },

  data: () => ({

  }),
};
</script>

<template>
  <v-app>
    <NavigationDrawer/>
    <v-app-bar app/>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>
