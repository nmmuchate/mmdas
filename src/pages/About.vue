<template>
  <q-page>
    <div>
      <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      >
        <h4>Direitos Intelectuais</h4>
      </transition>
      <p>A Manjor MDA & Serviços detém os direitos de todo o material contido nesta apresentação e em qualquer apresentação feita em competição com, ou em isolamento de qualquer outra agência, e no caso de nossa apresentação ser mal sucedida nenhuma parte desta proposta pode ser usada por terceiros sem a nossa aprovação por escrito.</p>
      <div class="row">
        <div class="col-4">
          <h6>Missão</h6>
          <p>A Missão da Manjor MDA & Serviços é de contribuir com a criatividade para a melhoria dos negócios dos nossos clientes, através da oferta de soluções estratégicas de marketing e vendas, que adicionam valor para o cliente final e promovem resultados sustentáveis.</p>
        </div>
        <div class="col-4">
          <h6>Visão</h6>
          <p> Visão da Manjor MDA & Serviços é de estabelecer relações de longo prazo com os nossos clientes, proporcionando continuamente excelentes resultados para investimentos e oportunidades do mercado e que dentro de 4 anos, se verifiquem ganhos benefícios para os envolvidos.</p>
        </div>
        <div class="col-4">
          <h6>Valores</h6>
          <p>Os Valores da Manjor MDA & Serviços são: inovação, criatividade, coerência, ética, foco, qualidade, competividade,  solidez de experiência e a constante preocupação com o detalhe.</p>
        </div>
      </div>
    </div>
    <br>
    <hr>
  </q-page>
</template>

<script>
 import gsap from 'gsap'
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
    }
  }
</script>

<style>

</style>
