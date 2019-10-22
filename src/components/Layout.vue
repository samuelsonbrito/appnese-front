<template>
  <v-app id="inspire">

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>AppNese</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Painel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exames</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-content>
      
      <v-container class="fill-height" fluid>
       
            <slot/>
            
       
      </v-container>
    </v-content>


    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>



  </v-app>
</template>

<script>
export default {

  name: 'layout',
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  }),
};
</script>

<style>
</style>