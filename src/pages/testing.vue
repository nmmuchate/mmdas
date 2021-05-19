<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      navigation
      arrows
      class="bg-primary  shadow-0 rounded-borders full-width fullscreen"
    >
      <q-carousel-slide name="style" class="column no-wrap ">
        <div class="q-gutter-md">
      <q-carousel
        v-model="slide1"
        swipeable
        animated
        class="bg-primary text-white shadow-0 rounded-borders full-width fullscreen"
      >
        <q-carousel-slide :name="1" class="s1" img-src="ku9a1090.jpg" />
        <q-carousel-slide :name="2" img-src="majorallachatado.jpg" />
        <q-carousel-slide :name="3" img-src="mmdas.jpg" />
      </q-carousel>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="">
        <div class="row">
          <div class="col-6 ">
            <section>
              <div class="q-ma-none text-center " data-aos="fade-right" id="my-h4">
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
          </div>
          <div class="col-6 bg-dark imgBox" data-aos="fade-left">
            <img class="imgBox" src="ku9a0940-min(1).jpg" alt="">
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column">
        <div class="row">
          <div class="col-6 bg-dark imgBox" data-aos="fade-right">
            <img class="imgBox" src="ku9a0938-min(1).jpg" alt="">
          </div>
          <div class="col-6 bg-primary">
            <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <h4 class="q-ma-none">História da Manjor MDA & Serviços</h4>
            </transition>
            <q-carousel
              v-model="slide2"
              :autoplay="2500"
              animated
              arrows
              class="bg-primary q-ma-none q-pa-lg shadow-0 "
            >
              <q-carousel-slide name="style">
                <h6><b>2017</b></h6>
                <p>A Manjor MDA & Serviços foi criada em 2017 pelo seu fundador Yane Pedro, na qual primeiramente comercializava produtos e artigos de estética e design visual. As vendas destes produtos eram feitas ao domicílio, de tal forma que se disponilibizava o produto mediante o pedido do cliente. E durante a trajectória destas actividades verificou-se uma maior demanda dos nossos produtos e uma maior aproximação e satisfação dos clientes que originou uma incapacidade de resposta a nível da demanda. E assim surgiu a ideia de se integrar outros membros na equipe para a gestão de actividades nos negócios, e houve também a necessidade de se participar em feiras e outros eventos de negócios como forma de dar resposta a exigência do mercado e estar ao nível da concorrência.</p>
                <br>
              </q-carousel-slide>
              <q-carousel-slide name="tv">
                <h6><b>2018</b></h6>
                <p>No ano de 2018, a Manjor MDA & Serviços notou um graduável crescimento em vendas e um elevado engajamento nos eventos de negócios que participou por conta dos produtos e das estratégias de marketing e vendas que foram implementadas nos projectos, permitindo a  atracção de vários clientes. E com isso, deu-se origem a uma nova ideia de elaboração dum projecto que consistia na concepção de eventos de negócios produzidos pela Manjor MDA & Serviços, que permitisse atender a um público maior e reduzir o índice da concorrência nas vendas dos produtos, pois,  produzindo este evento podia se expor e vender os produtos que quisesse sem se preocupar com a concorrência e havia a possibilidade de dar espaço e receber outros potenciais expositores e parceiros no evento. <br>
                E assim sendo, houve a necessidade convidar mais profissionais capacitados para a gestão dos projectos dos eventos e procedeu-se com o licenciamento da Manjor MDA & Serviços para actuação na área de eventos. Tendo reunido uma equipe de profissionais, foi concebido o projecto e implementado o primeiro evento de negócios produzido pela Manjor MDA & Serviços que duraria dois dias (sábado e domingo) como forma de atender a demanda do mercado. Foram firmadas parcerias com algumas empresas renomadas como a Zap Tv, Heineken, Amocine, Emose, Coca-Cola e Team só festas, e com a participação de algumas empresas e empreendedores como expositores do evento. <br>
                </p>
              </q-carousel-slide>
              <q-carousel-slide name="bn" class="">
                <p>Tendo decorrido o primeiro evento com muito sucesso e com uma grande demanda dos produtos que ainda persistia não só por parte da Manjor MDA & Serviços como também por parte das empresas envolventes, houve a necessidade de se produzir o segundo evento de negócios naquele mesmo ano, que também gerou um grande impacto para a Manjor MDA & Serviços, para os parceiros, para os expositores e para o público em geral, de tal forma que possibilitou a captação e fidelização de um grande volume de clientes para as empresas envolventes, aumento de vendas, maximização dos lucros das empresas, melhor posicionamento da Manjor MDA & Serviços e doutras empresas no mercado e mais.
                </p>
              </q-carousel-slide>
              <q-carousel-slide name="kl" class="">
                <h6><b>2019</b></h6>
                <p>Durante ano de 2019, a Manjor MDA & Serviços notou um grande desenvolvimento em vendas, crescimento na adesão dos eventos de negócios por parte do público, e uma certa tendência das empresas necessitarem cada vez mais de espaço para exibirem os seus produtos e serviços em eventos de género, de tal forma que permitiu com que a Manjor MDA & Serviços emigrasse definitivamente para área de eventos, sejam eles corporativos ou de negócios, e desenhasse um plano de negócios mais consistente e que estivesse associado a ideia de satisfazer as necessidades das empresas perante ao mercado competitivo. <br>
                </p>
              </q-carousel-slide>
              <q-carousel-slide name="as" class="">
                <p>Nesta óptica, foram desenvolvidos vários projectos dos quais o principal foi o da feira de negócios: Malhangalene Garden Double Days, que teve a luz do nome dado por um dos gestores Abgal Malafate. Projecto este que teve a sua implementação durante o segundo semestre do ano 2019, isto é, as feiras de negócios eram realizadas uma vez ao mês e em dois dias (sábado e domingo) durante o periodo de Agosto a Dezembro de 2019. </p>
                <p>As feiras de negócios eram um dos produtos do plano de negócios elaborado e que seguiam um conjunto de acções e estratégias para que todos eventos tivessem o êxito total, e foram realizadas de forma que acolhiam uma quantidade limitada de empresas de exposição no local do evento, onde essas empresas expunham os seus serviços e produtos de acordo com a natureza do evento, porém, com o passar do tempo verificou-se que para além apreciarem os negócios nos eventos, as pessoas participavam do evento como forma de diversão e entreternimento, deixando de lado o conceito principal do evento: troca de ideias e negócios.</p>
              </q-carousel-slide>
              <q-carousel-slide name="df" class="">
                <p>Contudo, durante o periodo de realização destes eventos, a Manjor MDA & Serviços definiu um propósito pelo qual existiria no mercado de negócios, que é de satisfazer as necessidades das empresas / empreendedores, de maneira a captar e fidelizar mais clientes para as empresas, aumentar as vendas, maximizar os lucros através de estratégias, táticas e ferramentas existentes nos seios das organizações e engajar o público com os serviços e produtos que estes disponham.</p>
                <p>Deste modo, a Manjor MDA & Serviços elaborou um plano de negócios  que devesse ser implementado no ano de 2020, e plano esse que visava realizar eventos de negócios com uma aprofundada pesquisa do mercado e a definição detalhada do público-alvo, para que todos os objectivos fossem alcançados.</p>
              </q-carousel-slide>
              <q-carousel-slide name="fd" class="">
                <h6><b>2020</b></h6>
                <p>Neste ano, com todo plano de negócios já estruturado para ser executado no âmbito da implementação dos eventos de négocios, houve a necessidade de se interroper as actividades de eventos devido ao surgimento da pandemia do novo virus: Covid-19.</p>
                <p>Após ter sido estudado o novo cenário do mercado de negócios face ao Covid-19, verificou-se um comportamento em comum em maior parte das empresas, dado por uma maior tendência em emigrar e investir mais no comércio digital e marketing digital, e deste modo a Manjor MDA & Serviços elaborou o novo plano de acordo com os dados obtidos.</p>
                <p>Este plano foi elaborado tendo em onta a nova realidade vivida pela sociedade, e com o intuito de atender a demanda notável das empresas sem ter que fugir no nosso conceito de eventos e que por sinal trouxesse maiores resultados.</p>
                <p>Hoje possuímos uma comprovada experiência em gestão de projectos de negócios, implementação e organização de eventos corporativos e de negócios, técnicas de comunicação, ferramentas de marketing relacional e serviços diversos. </p>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <div class="row">
          <div class="col-6">
            <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <h4>Objectivos da Manjor MDA & Serviços no mercado</h4>
            </transition>
            <p>A Manjor MDA & Serviços ambiciona trabalhar com os seus clientes (empresas/ empreendedores) no crescimento dos seus negócios e no alcance dos seus objectivos, de maneira que apoiamos a estes, ajudando-os a atingir um público distinto, informando, influenciando e lembrando-lhes dos benefícios, vantagens e singularidade das marcas que representamos, e permitindo também com que se possa:</p>
            <ul>
              <li>Aumentar a captação e fidelização do volume de clientes para as empresas/empreendedores</li>
              <li>Criar um engajamento dos clientes através estratégias implementadas nas empresas</li>
              <li>Melhorar o vínculo entre os potenciais clientes e as empresas a nível nacional, permitindo assim a construção dum melhor intercâmbio e novas parcerias</li>
              <li>Proporcionar um perfil mais competitivo e profissional das empresas no mercado de negócios</li>
              <li>Aumentar a capacidade de vendas e maximizar a lucratividade das empresas/ empreendedores</li>
              <li>Melhorar e dinamizar a capacidade de resposta das empresas/empreendedores mediante a demanda do mercado competitivo</li>
              <li>Dar oportunidades para as empresas nacionais poderem divulgar os seus negócios ao nível nacional e internacional</li>
            </ul>
          </div>
          <div class="col-6 bg-dark imgBox" data-aos="fade-left">
            <img class="imgBox" src="ku9a0976-min.jpg" alt="">
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="sd" >
        <div class="row">
          <div class="col-6">
            <div class="col-6 bg-dark imgBox" data-aos="fade-right">
              <img class="imgBox" src="ku9a1013-min.jpg" alt="">
            </div>
          </div>
          <div class="col-6">
            <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <h4>Nossos serviços e produtos</h4>
            </transition>
            <q-carousel
              v-model="slide3"
              :autoplay="2500"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="white"
              navigation
              padding
              arrows
              height="300px"
              class="bg-primary"
            >
      <!-- <ol> -->
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <div class="q-mt-md text-center">
                  <p>Criamos e implementamos um conjunto de plataformas que visam o entendimento e a gestão do relacionamento entre uma empresa e seus clientes actuais e potenciais, com o objectivo de aumentar a percepção do valor da marca e a rentabilidade da empresa ao longo do tempo</p> <br>
                  <b>Oferecemos os seguintes serviços:</b>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="sad" class="column no-wrap flex-center">
                <div class="text-center">
                    <h6 class="q-ma-none">1. Pesquisa de mercado</h6>
                    <p>Os serviços de pesquisa são os mais diversos e atendem a necessidade de sua empresa com as seguintes ofertas:</p>
                    <ul>
                      <li>Conhecer melhor seus clientes</li>
                      <li>Descobrir novos nichos de mercado</li>
                      <li>Monitorar a qualidade de seu atendimento</li>
                      <li>Avaliar a imagem que as pessoas têm de sua empresa ou produto</li>
                  </ul>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="adr" class="column no-wrap flex-center">
                <div class="text-center">
                    <ul>
                      <li>Percepção de valor agregado que sua marca ou seu produto tem com seus consumidores</li>
                      <li>Percepção de preços</li>
                      <li>Descobertas de novos caminhos a seguir com sua marca, e mais.</li>
                    </ul>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="sdf" class="q-pa-none justify-center items-start">
                <div class="text-center">
                    <h6 class="q-ma-none">2. Consultoria e elaboração de projectos e planos de negócios de pequeno e médio porte</h6>
                    <p>Os nossos serviços neste ponto consistem em definir quais caminhos devem ser seguidos para alcançar os objectivos desejados, diminuindo riscos e incertezas de forma a demonstrar se o negócio é viável, considerando estratégias, mercado, operações e gestão ﬁnanceira.
                    A elaboração de um projecto ou plano de negócios, permite que o cliente deﬁna as diretrizes mais importantes de sua empresa, de modo a mapear informações que atraem investidores, além de conseguir traçar melhor estratégias de curto e longo prazo.
                    Seja para um novo empreendimento, ou uma reestruturação empresarial, toda empresa precisa ter seu plano de negócios bem deﬁnido, uma vez que sem as informações contidas neste documento, o caminho para alcançar seus objetivos torna-se cada vez mais árduo.</p>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="qwe" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-6">
            <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <h6>3. Implementação e gestão de projectos e planos de negócios de pequeno e médio porte</h6>
            </transition>
              <p>Nestes serviços, colocamos em prática todo o plano de negócios, ou seja, tiramos o negócio do papel para realidade através de uma série de métricas e elaboração dos mais variados planos, sejam eles estratégicos, operacionais, táticos, financeiros, de marketing e mais.</p>
              <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <h6>4. Desenvolvimento e implementação de planos estratégicos de marketing e comunicação</h6>
            </transition>
            <p>Quanto a estes serviços, dispomos das seguintes ofertas:</p>
            <ul>
                <li>Criação de campanhas pontuais e de divulgação</li>
            </ul>
            </div>
            <div class="col-6 bg-dark imgBox" data-aos="fade-left">
              <img class="imgBox" src="ku9a0947-min.jpg" alt="">
            </div>
          </div>
      </q-carousel-slide>
      <q-carousel-slide name="jl" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-6 bg-dark imgBox" data-aos="fade-right">
              <img class="imgBox" src="ku9a1054-Recuperado-1(1)-min.jpg" alt="">
            </div>
            <div class="col-6">
              <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <h6>5. Desenvolvimento e implementação de planos estratégicos de marketing e comunicação</h6>
            </transition>
            <ul>
                <li>Criação e gestão de conteúdos para plataformas digitais</li>
                <li>Criação de identidade visual para empresas e negócios</li>
                <li>Criação de e-commerce</li>
                <li>Consultoria SEO e CRO</li>
                <li>Produção de videos públcitários</li>
            </ul>
            <h6 class="q-ma-none">6. Avaliação e melhoria dos mecanismos existentes de estratégias de marketing e vendas primando pela inovação e pela divulgação usando as tecnologias e as diferentes plataformas para que esta se projecte tanto no plano nacional assim como a nível internacional</h6>
            <p>Fazemos uma análise geral dos recursos e materiais de comunicação existentes na empresa ou no negócio e com base nas observações feitas elaboramos uma nova estrutura de marketing e vendas  padronizada e definimos possíveis hipóteses de implementação face a situação do mercado actual e garantimos que o novo modelo se destaque no meio da concorrência, permitindo assim a geração de altos resultados ou até a superação das expectativas</p>
            </div>
          </div>
      </q-carousel-slide>
      <q-carousel-slide name="dsf" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-6">
              <transition
              appear
              @before-enter="beforeEnter"
              @enter="enter"
              >
              <h6>7. Produção e organização de eventos e espaços de vendas</h6>
            </transition>
            <p><b>Oferecemos os seguintes Produtos:</b></p>
            <ol>
                <li>Exposições de negócios</li>
                <li>Projectos adaptados</li>
                <li>Artigos e acessórios de estética</li>
            </ol>
            </div>
            <div class="col-6 bg-dark imgBox" data-aos="fade-left">
              <img class="imgBox" src="ku9a0990-1(1)-min.jpg" alt="">
            </div>
          </div>
      </q-carousel-slide>
      <q-carousel-slide name="qwgfe" class="column no-wrap flex-center">
          <div class="text-center">
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
      </q-carousel-slide>
    </q-carousel>
  </div>
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
        enter,
        slide: 'style',
        slide2: 'style',
        slide3: 'style',
        slide1: 1
      }
    },
  }
</script>

<style>
  .s1{
    background-size: cover;
  }
  .imgBox{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
</style>
