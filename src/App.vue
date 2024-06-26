<template>

  <!-- JUST NAV -->
  <NavigationBar @login="loginModalActive = !loginModalActive" @signup="signUpModalActive = !signUpModalActive" />

  <!-- ROUTER VIEW -->
  <router-view/>

  <!-- FOOTER VIEW -->
  <Footer />

<div class="modal" :class="{ 'is-active': loginModalActive }">
  <div class="modal-background"></div>
  <div class="modal-card" style="padding:15px;">
    <section class="modal-card-body" style="border:1px solid grey;border-radius:5px;">
<!-- <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div> -->

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="password" placeholder="Password input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-key"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<!-- <div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div> -->

<!-- <div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div> -->

<!-- <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div> -->

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link is-inverted">Submit</button>
  </div>
  <div class="control">
    <button class="button is-info is-inverted">Google</button>
  </div>
  <div class="control">
    <button class="button is-info is-inverted">Discord</button>
  </div>
  <div class="control">
    <button class="button is-link is-light" @click="loginModalActive = !loginModalActive">Cancel</button>
  </div>
</div>
    </section>
  </div>
</div>

<div class="modal" :class="{ 'is-active': signUpModalActive }">
  <div class="modal-background"></div>
  <div class="modal-card" style="padding:15px;">
    <section class="modal-card-body" style="border:1px solid grey;border-radius:5px;">
<!-- <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div> -->

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">E-mail</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-warning" type="email" placeholder="E-mail input" value="me@mail.io">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-warning">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-warning" type="password" placeholder="Password input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-key"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-warning">This password is easy to guess</p>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="password" placeholder="Password input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-key"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This password does not match</p>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

<!-- <div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div> -->

<!-- <div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div> -->

<!-- <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div> -->

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link is-inverted">Submit</button>
  </div>
  <div class="control">
    <button class="button is-info is-inverted">Google</button>
  </div>
  <div class="control">
    <button class="button is-info is-inverted">Discord</button>
  </div>
  <div class="control">
    <button class="button is-link is-light" @click="signUpModalActive = !signUpModalActive">Cancel</button>
  </div>
</div>
    </section>
  </div>
</div>

</template>

<script setup>
  import { ref } from 'vue'
  import NavigationBar from '@/components/NavigationBar';
  import Footer from '@/components/Footer';

  const loginModalActive = ref(false);
  const signUpModalActive = ref(false);
</script>

<style lang="scss">
  @mixin mobile {
    @media (max-width: 768px) {
      @content;
    }
  }
  div.landing-page > section.landing-hero.hero > div > div > p.title {    
    @include mobile {
      font-size:60px;
    }
  }
  div.landing-page > section.landing-hero.hero > div > div > p.subtitle {    
    @include mobile {
      font-size:20px;
    }
  }
  div.landing-page > section.landing-hero.hero {    
    @include mobile {
      background-size: 250%;
    }
  }
</style>
