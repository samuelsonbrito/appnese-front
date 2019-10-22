<template>
  <div>
    <h1>oi</h1>

    <layout>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-chip class="ma-2" label>Informe o código do Hospital</v-chip>
          <v-text-field placeholder="INFORME O CÓDIGO DO HOSPITAL"></v-text-field>
          <v-btn color="success">Avançar</v-btn>
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
  }
};
</script>