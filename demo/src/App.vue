<template>
  <div class='demo_container'>
    <button v-on:click="set_range_value">Change Value</button>
    <range-comp
        heading="Font Size"
        header_position="below"
        :range_value="range_value"
        :min="min"
        :max="max"
        :step="step"
        :css_variables="css_variables"
        v-on:range_comp_value_changed="show_value">
    </range-comp>
  </div>
</template>

<script>
  import RangeComp from 'rangecomp';

  export default {
    name: 'App',
    data() {
      return {
        number_value: 25,
        range_value: null,
        min: 10,
        max: 40,
        step: .5,
        css_variables: {
          range_comp_heading_color: 'white',
          range_comp_input_color: 'white',
          range_comp_input_border_color: 'white',
          range_comp_value_color: 'white'
        }
      };
    },
    components: {
      RangeComp
    },
    methods: {
      show_value: function(value){
        console.log(value);
      },
      set_range_value: function(){
        this.number_value += .5;
        if(this.number_value > 39){
          this.number_value = 10;
        }
        this.range_value = this.number_value;
      }
    },
    mounted() {
      this.range_value = 25;
    }
  }
</script>

<style>
  .demo_container {
    padding: 20px;
    background-color: slateblue;
    width: 50rem;
    height: 38rem;
  }
  button {
    margin-bottom: 2.5rem;
  }
</style>