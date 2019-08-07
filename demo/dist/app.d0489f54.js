parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HBLx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={name:"RangeComp",data:()=>({current_value:null,rangeClass:"rangeComp_headerBox__left",valueBoxMargin:{margin:"0 0 0 4px"}}),props:{heading:{type:String,default:null},range_value:{type:Number,default:null},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},header_position:{type:String,default:"left"},css_variables:{type:Object,default:()=>null}},watch:{range_value:function(e){this.current_value=e}},methods:{value_changed:function(e){const a=e.currentTarget.valueAsNumber;this.current_value=a,this.$emit("range_comp_value_changed",a)}},mounted(){if("left"===this.header_position?(this.valueBoxMargin={margin:"2px 0 0 4px"},this.rangeClass="rangeComp_headerBox__left"):"above"===this.header_position?(this.valueBoxMargin={margin:"20px 0 0 4px"},this.rangeClass="rangeComp_headerBox__above"):"below"===this.header_position&&(this.valueBoxMargin={margin:"-4px 0 0 4px"},this.rangeClass="rangeComp_headerBox__below"),null!==this.css_variables)for(let e of Object.keys(this.css_variables))this.$el.style.setProperty(`--${e}`,this.css_variables[e])}};exports.default=e;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"rangeComp"},[n("div",{class:e.rangeClass},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.heading,expression:"heading"}],staticClass:"rangeComp_headerBox"},[e._v(e._s(e.heading))]),e._v(" "),n("input",{staticClass:"rangeComp_input",attrs:{type:"range",min:e.min,max:e.max,step:e.step},domProps:{value:e.current_value},on:{input:function(a){return e.value_changed(a)}}})]),e._v(" "),n("div",{staticClass:"rangeComp_valueBox",style:e.valueBoxMargin},[e._v(e._s(e.current_value))])])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"6plK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("rangecomp"));function n(e){return e&&e.__esModule?e:{default:e}}var t={name:"App",data:function(){return{number_value:25,range_value:null,min:10,max:40,step:.5,css_variables:{range_comp_heading_color:"white",range_comp_input_color:"white",range_comp_input_border_color:"white",range_comp_value_color:"white"}}},components:{RangeComp:e.default},methods:{show_value:function(e){console.log(e)},set_range_value:function(){this.number_value+=.5,this.number_value>39&&(this.number_value=10),this.range_value=this.number_value}},mounted:function(){this.range_value=25}};exports.default=t;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"demo_container"},[n("button",{on:{click:e.set_range_value}},[e._v("Change Value")]),e._v(" "),n("range-comp",{attrs:{heading:"Font Size",header_position:"below",range_value:e.range_value,min:e.min,max:e.max,step:e.step,css_variables:e.css_variables},on:{range_comp_value_changed:e.show_value}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"rangecomp":"HBLx"}],"vZyd":[function(require,module,exports) {
"use strict";var e=u(require("./App.vue"));function u(e){return e&&e.__esModule?e:{default:e}}new Vue({render:function(u){return u(e.default)}}).$mount("#app");
},{"./App.vue":"6plK"}]},{},["vZyd"], null)
//# sourceMappingURL=/app.d0489f54.js.map