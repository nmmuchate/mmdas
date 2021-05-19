<template>
  <q-page class="page">
    <div class="q-pa-none">
      <carousel/>
    </div>
    <section>
      <div class="q-ma-none" data-aos="fade-right" id="my-h4">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
        <h4 class="my-h4">Quem somos nós?</h4>
    </transition>
        <p>A Manjor MDA & Serviços é uma empresa jovem voltada para a área de gestão, inovação e implementação de projectos de negócios, eventos, comunicação, marketing relacional, vendas e serviços diversos, desde os de pequeno porte até os de médio porte.
        Essa equipa compromete-se a contribuir para o desenvolvimento e crescimento das empresas ao nível do mercado, aumentando a sua capacidade de negócio através da exposição dos produtos e serviços em espaços de grande abragência e plataformas de atração de potenciais clientes e parceiros de negócios.
        Possui uma excelente expriência na área de vendas, desenvolvimento de projectos e eventos de negócios, e um bom relacionamento com algumas empresas renomadas no mercado, o que a privilegia na obtenção de parcerias, apoios, e serviços com preços acessíveis e agilidade na implementação dos projectos, que são os requisitos básicos nos dias de hoje.
        Ao solicitar uma cotação ou projeto, garante uma análise e comparação cuidada que oferece ao cliente os melhores serviços, produtos e soluções para cada necessidade.
        A Manjor MDA & Serviços encontra-se ao dispor do cliente, basta para isso contactá-la e visitar a sua página electrónica.</p>
      </div>
    </section>
    <section>
      <div>
        <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <h4>Áreas de actuação</h4>
        </transition>
        <div class="row">
          <div class="col-4">
            <ul>
              <li>Empreendedorismo</li>
              <li>Comércio</li>
              <li>Finanças e Investimentos</li>
              <li>Imobiliária</li>
              <li>Construção Civil</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div class="col-4">
            <ul>
              <li>Tecnologia</li>
              <li>Telecomunicações e Informática</li>
              <li>Logistica e Transportes</li>
              <li>Automotivo</li>
              <li>Química e Petroquímica</li>
              <li>Eventos</li>
            </ul>
          </div>
          <div class="col-4">
            <ul>
              <li>Óleo e Gás</li>
              <li>Desporto</li>
              <li>Saúde</li>
              <li>Cultura</li>
              <li>Moda e Imagem.</li>
              <li>Literatura</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>
  import gsap  from "gsap";
  import AOS from 'aos'
  import 'aos/dist/aos.css'


  AOS.init()
  export default {
    data() {
      const beforeEnter = (el) => {
        console.log('anter de clicar no enter')
        el.style.transform = 'translateY(-50px)'
        el.style.opacity = 0
      }
      const enter = (el) => {
        console.log('no clique do enter')
        gsap.to(el, {
          duration: 0.7,
          y: 0,
          opacity: 1
        })
      }
      return{
        beforeEnter,
        enter
      }
    },
    components: {
      'carousel' : () => import('components/Carousel.vue')
    }
  }
</script>
<style>
  /* page{
    min-height: 420px;
  } */

  section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section:nth-child(1){
    color: #fff;
  }

  section:nth-child(2){
    color: #1D212B;
  }
  .imgBox{
    width: 120px;
    height: 120px;
  }
</style>
