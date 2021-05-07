<template>
  <q-page>
    <div>
      <h4>Equipe técnica</h4>
      <p>A Equipe da Manjor MDA & Serviços é experiente na criação, avaliação, implementação e gestão de campanhas e programas de incentivos e motivação. Os membros desta equipe têm o cuidado de criar soluções inovadoras, que representam uma marca distinta em relação à sua qualidade e fiabilidade na construção duma relação entre a empresa e o cliente. Desde logo foi uma preocupação encontrar uma rede de pessoal especializado para a gestão dos projectos e poder assegurar aos nossos clientes uma assistência técnica e profissional. Alguns anos passaram desde a nossa primeira implementação do plano de negócios, e continuamos a produzir projectos tecnologicamente evoluídos e de alta qualidade.  Temos a flexibilidade de podermos produzir projectos e dar assistência nmà medida dos nossos clientes obedecendo sempre às suas exigências.</p>
      <p>A equipe técnica é constituida pelos seguintes membros:</p>
    </div>
    <div class="row">
      <div v-for="member in members" :key="member.name" class="col-4 q-pa-md">
        <q-card class="q-pa-md my-card">
          <q-item  class="justify-center items-center">
            <q-item-section avatar>
              <q-avatar
                size="85px"
                font-size="50px"
                text-color="white"
                color="blue-1"
                icon="person"
              />
            </q-item-section>
          </q-item>
          <q-item  class="justify-center text-center items-center">
            <q-item-section>
              <q-item-label class="text-h6">
                {{ member.name }}
              </q-item-label>
              <q-item-label>
                {{ member.jobPosition }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      stars: 4,
      members: [
        {
          name: 'Yane Pedro',
          jobPosition: 'Fundador e Gestor de projectos'
        },
        {
          name: 'Abgal Malafate',
          jobPosition: 'Gestor Administrativo'
        },
        {
          name: 'Maika José',
          jobPosition: 'Gestora de Finanças'
        },
        {
          name: 'Carina Benedito',
          jobPosition: 'Gestora de Recursos Humanos'
        },
        {
          name: 'Valter Langa',
          jobPosition: 'Gestor de Marketing e Comunicação'
        },
        {
          name: 'Elsa Chomane',
          jobPosition: 'Gestora Comercial'
        },
        {
          name: 'Rose Miqui',
          jobPosition: 'Gestora de Logística'
        }
      ]
    }
  }
}
</script>

<style>
.my-card {
  width: 250px;
  height: 250px;
}

</style>
