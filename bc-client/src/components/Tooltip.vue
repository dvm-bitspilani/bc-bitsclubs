<template>
  <div class="tooltip-box">
    <slot />
    <div
      class="tooltip"
    >
      <span
        class="text"
      >{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tooltip-box { 
  position: relative;
  display: inline-block;
  
}

.tooltip-box:hover .tooltip{
  display: inline-block;
  opacity: 1;
}

.tooltip { 
  color: #413f3f;
  text-align: left;
  padding: 3px;
  border-radius: 4px;
  width: 160px;
  bottom: 100%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 1s;
  position: absolute;
  z-index: 10;
  background: #e4e3e6;
  display: none;

}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #e4e3e6 transparent transparent transparent;
}
</style>