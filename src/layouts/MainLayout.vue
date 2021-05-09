<template>
  <q-layout class="constrain" view="lHh Lpr lFf">
    <q-header id="my-header" v-scroll="scrolled()" >
          <!-- Manjor MDA & Serviços -->
          <div class="row q-pt-md constrain">
            <div class="col">
              <q-btn
                v-if="navigationBarBlockButton"
                icon="chevron_left"
                to="/"
                class="btn"
                flat
                label="voltar" />
            </div>
            <div class="col">
              <q-btn
                icon-right="navigate_next"
                to="/about"
                class="btn"
                flat
                label="Sobre" />
            </div>
            <div class="col">
              <q-btn
                icon-right="navigate_next"
                to="/history"
                class="btn"
                flat
                label="Historia" />
            </div>
             <div class="col">
              <q-btn
                icon-right="navigate_next"
                to="/service"
                class="btn"
                flat
                label="Serviços" />
            </div>
             <div class="col-3">
              <q-btn
                icon-right="navigate_next"
                to="/team"
                class="btn"
                flat
                label="Equipe" />
            </div>
          </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      showButton: true
    }
  },
  computed: {
    navigationBarBlockButton(){
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return !this.showButton
      else if(currentPath == '/about') return this.showButton
      else if(currentPath == '/history') return this.showButton
      else if(currentPath == '/service') return this.showButton
      else if(currentPath == '/team') return this.showButton

    }
  },
  methods: {
    scrolled(){
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("my-header").style.top = "0";
        } else {
          document.getElementById("my-header").style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
}
</script>
<style>
#my-header{
  height: 75px;
  transition: top 0.7s;
}
.btn:hover{
  background: #fefefe;
  color: #42a5f5;
}
</style>
