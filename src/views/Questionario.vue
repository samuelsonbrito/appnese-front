<template>
  <div>
    <layout class="conteudo">
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-form v-model="valid">
            <v-container>
              <div v-for="question in questions" :key="question.id">
                <v-card class="mx-auto" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">{{question.description}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-text>
                    <v-row v-for="alternative in question.alternatives" :key="alternative.id">
                      <v-col cols="12" md="5">
                        <div class="question">{{alternative.description}}</div>
                      </v-col>
                      <v-col cols="12" md="2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                      </v-col>
                      <v-col cols="12" md="5">
                        <v-text-field required placeholder="Descreva"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </div>
            </v-container>
          </v-form>
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
      questions: [
        {
          id: 1,
          description: "Assinale caso possua alguma das doenças abaixo:",
          alternatives: [
            { description: "Asma" },
            { description: "Bronquite" },
            { description: "Rinite" },
            { description: "Alguma outra doença pulmonar? Quais?" },
            { description: "Doenças cardiacas. Qual?" },
            { description: "Pressão alta" },
            { description: "Insuficiência cardica" },
            { description: "Angina" },
            { description: "Infarto recente" }
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
.question {
  margin-top: 5%;
}
</style>