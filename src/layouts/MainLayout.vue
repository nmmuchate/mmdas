<template>
  <q-layout class="constrain" view="lHh Lpr lFf">
    <q-header id="my-header" v-scroll="scrolled()" >
          <!-- Manjor MDA & Serviços -->
          <div class="row constrain">
            <div class="col-3">
              <q-btn
                icon-right="navigate_next"
                to="/about"
                class="btn"
                flat
                label="Sobre" />
            </div>
            <div class="col-3">
              <q-btn
                icon-right="navigate_next"
                to="/history"
                class="btn"
                flat
                label="Historia" />
            </div>
             <div class="col-3">
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
  computed: {
    pathChoice(){

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
          document.getElementById("my-header").style.top = "-180px";
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
}
</script>
<style>
#my-header{
  height: 180px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transition: top 0.7s;
}
.btn:hover{
  background: #fefefe;
  color: #42a5f5;
}
</style>
