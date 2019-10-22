<template>
  <div>
    <layout class="conteudo">
      <v-row align="center" justify="center">
        <v-col class="text-center">

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" @click>
              <v-list-item-icon>
                <v-icon v-if="item.icon" color="pink">mdi-file-document-box</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          
        </v-col>
      </v-row>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";

export default {
  components: {
    Layout
  },

  data() {
    return {
      items: [
          { title: "Exame 1", icon: "drive-document" },
          { title: "Exame 2", icon: "drive-document" },
          { title: "Exame 3", icon: "drive-document" },
          { title: "Exame 4", icon: "drive-document" },
          { title: "Exame 5", icon: "drive-document" },
          { title: "Exame 6", icon: "drive-document" },
          { title: "Exame 7", icon: "drive-document" },
          { title: "Exame 8", icon: "drive-document" },
          { title: "Exame 9", icon: "drive-document" },
          { title: "Exame 10", icon: "drive-document" },
          ]
    };
  }
};
</script>


<style scoped>
.conteudo {

}
</style>