<script>
export default {
  name: "NavigationDrawer",

  data: () => ({
    items: [
      {title: 'Home', icon: 'mdi-view-dashboard', link: '/'},
      {title: 'Users', icon: 'mdi-account-multiple-outline', link: '/users'},
      {title: 'Roles', icon: 'mdi-account-tie', link: '/roles'},
      {title: 'Goods', icon: 'mdi-cart-variant', link: '/goods'},
      {title: 'Orders', icon: 'mdi-order-bool-descending-variant', link: '/orders'},
    ],
    right: null,
  }),
}
</script>

<template>
  <v-navigation-drawer app permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
        class="nav"
        dense
        nav
    >
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="py-0">
          <router-link :to="item.link">
            <v-list-item-title class="py-3">
              {{ item.title }}
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.nav {
  a {
    font-weight: bold;
    text-decoration: none;
    color: gray;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>