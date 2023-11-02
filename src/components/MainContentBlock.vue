<template>
  <div class="main-content-block">
    <slot></slot>
  </div>
</template>

<style>
.main-content-block {
  display: flex;
  height: fit-content;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  border: 1px solid #e30611;
  border-radius: 15px;
  margin: 2vh;
}
</style>
