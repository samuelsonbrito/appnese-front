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
              <br />
              <v-row>
                <v-col cols="12" md="12">
                  <v-checkbox
                    v-model="aceiteTermos"
                    label="Declaro que os dados informados são verdadeiros"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="5" md="6">
                  <v-btn color="error" large v-on:click="voltar">Voltar</v-btn>
                </v-col>
                <v-col cols="7" md="6">
                  <v-btn
                    color="success"
                    large
                    :disabled="!aceiteTermos"
                    v-on:click="enviar()"
                  >Enviar</v-btn>
                </v-col>
              </v-row>
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
      aceiteTermos: false,
      questions: [
    {
        "id": 1,
        "description": "Você já fez mamografia anteriormente?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 2,
        "description": "Trouxe exames anteriores?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 3,
        "description": "Existem casos de câncer de mama na sua família?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 4,
        "description": "Você faz uso de hormônio?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 5,
        "description": "Você já fez punção ou biopsia de mama?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 6,
        "description": "Já fez alguma cirurgia nas mamas?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 7,
        "description": "Possui prótese mamária?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    },

    {
        "id": 8,
        "description": "Já fez radioterapia na mama?",
        "alternatives": [
            {
                "description": "Marque"
            }

        ]
    }

]
    };
  },

  methods: {
    voltar() {
      this.$router.push("/exames");
    },
    enviar(){
        alert('Enviado com sucesso!')
    }
  }
};
</script>


<style scoped>
.question {
  margin-top: 5%;
}
</style>