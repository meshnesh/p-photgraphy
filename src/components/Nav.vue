<template>
  <div class="nav">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top light-bg center">
      <!-- <header>
        <a href="#" id="logo">Logo</a>
    </header> -->
      <a class="navbar-brand text-light" href="#"id="logo">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto text-light">
          <li class="nav-item active">
            <router-link class="nav-link text-light" v-bind:to="'/'">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link text-light" v-bind:to="'/grid'">Grid</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link text-light" v-bind:to="'/card'">Card</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>
