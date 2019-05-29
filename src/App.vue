<template>
  <div id="q-app" :style="'min-height:' + $deviceSize.heigth +'px !important;position: absolute;overflow:scroll'" @scroll="mora">
    <router-view/>
    <!--<transition   enter-active-class="animated zoomOut" mode="out-in" appear>
            <router-view/>
         </transition>-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      toogleClassActive: function(posicion) {
          
        for (var index = 0; index < 5; index++) {
          if (index === posicion) {
            document.getElementsByClassName("item-toolbar")[index].classList.add("active-scroll");
        
          } else {
            document.getElementsByClassName("item-toolbar")[index].classList.remove("active-scroll");
            document.getElementsByClassName("item-toolbar")[index].classList.remove("active");
   
          }
        }
      },
      mora: function() {
        var array = ["primero", "segundo", "tercero", "cuarto", "quinto"];
        var valor;
        var arrayPosition = [];
        for (var i = 0; i < array.length; i++) {
          valor = document.getElementById(array[i]).offsetTop;
          arrayPosition.push(valor);
        }
       
        var movimiento = document.getElementById("q-app").scrollTop;
        if (movimiento >= arrayPosition[1] && movimiento < arrayPosition[2]) {
          this.toogleClassActive(1);
        } else if (movimiento >= arrayPosition[2] && movimiento < arrayPosition[3]) {
          this.toogleClassActive(2);
        } else if (movimiento >= arrayPosition[3] && movimiento < arrayPosition[4]) {
          this.toogleClassActive(3);
        } else if (movimiento >= arrayPosition[4]) {
          this.toogleClassActive(4);
        } else {
          this.toogleClassActive(0);
        }
      },
    },
    beforeCreate: function() {
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style/>