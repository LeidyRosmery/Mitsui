var store = require('store');
import Vue from 'vue';

export default {
  data() {
    return {
      arrayPosition:[]
    };
  },
  methods: {   
    toogleClassActive: function(posicion) {
      for (var index = 0; index < 5; index++) {
        if (index === posicion) {
          // document.getElementsByClassName("item-toolbar")[index].classList.add("active-scroll");
          document.getElementsByClassName("item-toolbar")[index].classList.add("active");
        } else {
          // document.getElementsByClassName("item-toolbar")[index].classList.remove("active-scroll");
          document.getElementsByClassName("item-toolbar")[index].classList.remove("active");
        }
      }
    },

    // mora:function() {  
    //   var movimiento = document.getElementById("scroll").scrollTop;
    //   // if (movimiento <= this.arrayPosition[1]) {
     
    //   // } else
    //    if (movimiento >= this.arrayPosition[1] && movimiento < this.arrayPosition[2]) {      
    //     this.toogleClassActive(1);
    //   } else if (movimiento >= this.arrayPosition[2] && movimiento < this.arrayPosition[3]) {
    //     this.toogleClassActive(2);
    //   } else if (movimiento >= this.arrayPosition[3] && movimiento < this.arrayPosition[4]) {        
    //     this.toogleClassActive(3);
    //   } else if (movimiento >= this.arrayPosition[4] ) {        
    //     this.toogleClassActive(4);
    //   }else{
    //   this.toogleClassActive(0);
    //   }
    // },
    onItem: function (event) {      
      var arrayClases=document.getElementsByClassName("item-toolbar");
      for(var i=0;i<arrayClases.length;i++){
          arrayClases[i].classList.remove("active");
          arrayClases[i].classList.remove("active-scroll");
      }
      event.target.classList.add("active");
      var itemSelect = event.target.dataset.item ; 
      var item = document.getElementById(itemSelect);

      var valor=item.offsetTop;  
      document.getElementById("q-app").scrollTop=valor;  

    }


  },
  created () {
    //window.addEventListener('scroll', this.sera);
  },
  destroyed () {
    //window.removeEventListener('scroll', this.sera);
  },
  mounted (){
   detalle.pruebaValor=13;
    var array = ["primero","segundo","tercero","cuarto","quinto"];  
    var valor;
    for(var i = 0 ; i<array.length ; i++){
      valor = document.getElementById(array[i]).offsetTop;
      this.arrayPosition.push(valor);     
    }
    
  }
};
