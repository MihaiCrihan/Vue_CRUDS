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
    isOpen: true,
  }),

  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
  <v-navigation-drawer :mini-variant="!isOpen" app permanent class="drawer-header">
    <v-btn @click="toggleDrawer" icon elevation="6" class="drawer-actions white">
      <v-icon small>{{ isOpen ? 'mdi-arrow-collapse-left' : 'mdi-arrow-collapse-right' }}</v-icon>
    </v-btn>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Cronix
        </v-list-item-title>
        <v-list-item-subtitle>
          router app
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

<style>
.v-main {
  position: absolute;
  width: 100%;
}
</style>

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

.drawer-header {
  position: relative;
  overflow: inherit;
}

.drawer-actions {
  position: absolute;
  right: 0;
  top: 14px;
  transform: translateX(50%);
  z-index: 2;
}
</style>