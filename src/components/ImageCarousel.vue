<template>
    <div class="container">
      <div class="carousel-container" ref="carouselContainer">
        <div class="columns is-mobile is-multiline image-carousel" ref="carousel">
          <div class="column is-3" v-for="(image, index) in images" :key="index" :class="{'is-hidden': !isSlideVisible(index)}">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous" @click="prevSlide">Previous</a>
        <a class="pagination-next" @click="nextSlide">Next</a>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel',
    props: {
      images: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        currentIndex: 0,
        visibleSlides: 0,
      };
    },
    mounted() {
      this.updateVisibleSlides();
      window.addEventListener('resize', this.updateVisibleSlides);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateVisibleSlides);
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.images.length - 1;
        }
      },
      isSlideVisible(index) {
        return index >= this.currentIndex && index < this.currentIndex + this.visibleSlides;
      },
      updateVisibleSlides() {
        const containerWidth = this.$refs.carouselContainer.offsetWidth;
        const slideWidth = this.$refs.carousel.querySelector('.column').offsetWidth;
        this.visibleSlides = Math.floor(containerWidth / slideWidth);
      }
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .image-carousel .column {
    display: inline-block;
    width: 25%; /* This corresponds to is-3 width in Bulma */
  }
  
  .image-carousel img {
    width: 100%;
    height: auto;
  }
  </style>
  