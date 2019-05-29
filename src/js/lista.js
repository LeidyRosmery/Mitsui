import util from '../util/util';
import homeModel from "../models/footer/homeModel";
var store = require('store')
export default {
  data() {
    return {
  
    }
  },
  methods:
  {
    goDetalle: function () {
      this.$router.push({ name: 'detalle' });    
    },
    handleScroll: function () {
      // this.$router.push({ name: 'detalle' });    
      console.log("funciona scroll");
    },


  },
  created() {

  }
}
