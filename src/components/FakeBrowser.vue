<template>
    <div class="browser-wrapper">
      <div class="browser-header">
        <div class="browser-buttons">
          <div class="circle red"></div>
          <div class="circle yellow"></div>
          <div class="circle green"></div>
        </div>
        <input class="browser-url" type="text" :value="link" readonly />
      </div>
      <div class="image-container">
        <img :src="image" alt="Browser content" />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BrowserImageWrapper',
    props: {
        link: String,
      image: String,
    },
  });
  </script>
  
  <style scoped lang="scss">
  .browser-wrapper {
    border: 1px solid #333333;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Bulma', sans-serif;
    .browser-header {
      background-color: #333333;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      .browser-buttons {
        display: flex;
        .circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 4px;
          &.red { background-color: #ff605c; }
          &.yellow { background-color: #ffbd44; }
          &.green { background-color: #00ca4e; }
        }
      }
      .browser-url {
        border: none;
        margin-left: 8px;
        padding: 2px 4px;
        font-size: 12px;
        color: #cccccc;
        background-color: #444444;
        border-radius: 4px;
        width: calc(100% - 60px); /* Adjust based on parent padding and button width */
        &:focus {
          outline: none;
        }
      }
    }
    .image-container {
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
  </style>
  