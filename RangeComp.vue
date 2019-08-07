<template>
  <div class="rangeComp">
    <div :class="rangeClass">
      <div class="rangeComp_headerBox" v-show="heading">{{heading}}</div>
      <input
          class="rangeComp_input"
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :value="current_value"
          v-on:input="value_changed($event)">
    </div>
    <div class="rangeComp_valueBox" :style="valueBoxMargin">{{current_value}}</div>
  </div>
</template>

<script>
  export default {
    name: 'RangeComp',
    data(){
      return {
        current_value: null,
        rangeClass: 'rangeComp_headerBox__left',
        valueBoxMargin: {margin: '0 0 0 4px'}
      }
    },
    props: {
      heading: {
        type: String,
        default: null
      },
      range_value: {
        type: Number,
        default: null
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      header_position: {
        type: String,
        default: 'left'
      },
      css_variables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    watch: {
      range_value: function(new_value){
        this.current_value = new_value;
      }
    },
    methods: {
      value_changed: function(e){
        const current_value = e.currentTarget.valueAsNumber;
        this.current_value = current_value;
        this.$emit('range_comp_value_changed',current_value);
      }
    },
    mounted(){
      if(this.header_position === 'left'){
        this.valueBoxMargin = {margin: '2px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__left';
      }else if(this.header_position === 'above'){
        this.valueBoxMargin = {margin: '20px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__above';
      }else if(this.header_position === 'below'){
        this.valueBoxMargin = {margin: '-4px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__below';
      }

      if(this.css_variables !== null){
        for(let key of Object.keys(this.css_variables)){
          this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
        }
      }
    }
  }
</script>

<style lang="less">
  :root {
    --range_comp_font_family: Verdana,serif;
    --range_comp_font_size: 1rem;

    --range_comp_heading_color: black;
    --range_comp_heading_font_size: 1rem;
    --range_comp_heading_font_weight: bold;

    --range_comp_thumb_background: radial-gradient(ellipse at center, #e4f5fc 0%,#6e6bff 66%);
    --range_comp_thumb_size: .75rem;

    --range_comp_track_width: 25rem;
    --range_comp_track_height: .6rem;
    --range_comp_track_background: linear-gradient(to bottom, #969696 0, #969696 13%, #5f5f5f 33%, #1e1e1e 64%, #1e1e1e 100%);
    --range_comp_track_focus_background: #445;
    --range_comp_value_color: black;
  }

  .rangeComp {
    display: flex;
    flex-direction: row;
    font-family: var(--range_comp_font_family);
    font-size: var(--range_comp_font_size);

    &_headerBox {
      align-self: center;
      color: var(--range_comp_heading_color);
      font-size: var(--range_comp_heading_font_size);
      font-weight: var(--range_comp_heading_font_weight);
      margin: .2rem;
    }

    &_headerBox__above {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_headerBox__below {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    &_headerBox__left {
      display: flex;
      flex-direction: row;
    }

    &_input {
      -webkit-appearance: none;
      background: transparent;
      width: var(--range_comp_track_width);
      height: var(--range_comp_track_height);

      &::-webkit-slider-runnable-track {

        background: var(--range_comp_track_background);
        border: none;
        border-radius: 3px;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: var(--range_comp_thumb_size);
        width: var(--range_comp_thumb_size);
        border-radius: 50%;
        background: var(--range_comp_thumb_background);
        margin-top: -2px;
      }

      &:focus {
        outline: none !important;
      }
      &:focus::-webkit-slider-runnable-track {
        background: var(--range_comp_track_focus_background);
      }
    }

    &_valueBox {
      margin: 1.6rem 0 0 .6rem;
      color: var(--range_comp_value_color);
    }
  }
</style>