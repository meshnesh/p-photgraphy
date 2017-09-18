<template>
  <div>
    <app-nav></app-nav>
    <section id="hero1" class="hero">
        <div class="inner">
            <div class="copy">
                <h1>Grid Template</h1>
            </div>
        </div>
    </section>
    <!-- GRID IMAGES SECTION -->
    <section class="content">
        <div class="inner">
          <div class="grid">
            <div class="sect1">
              <img class="card-img-top rounded" src="../assets/imgs/dark.jpg" alt="">
            </div>
            <div class="sect2">
              <img class="card-img-top rounded" src="../assets/imgs/second.jpg" alt="">
            </div>
            <div class="sect3">
              <img class="card-img-top rounded" src="../assets/imgs/see.jpg" alt="">
            </div>
            <div class="sect4">
              <img class="card-img-top rounded" src="../assets/imgs/third.jpg" alt="">
            </div>
            <div class="sect5">
              <img class="card-img-top rounded" src="../assets/imgs/nicolas-picard-208276.jpg" alt="">
            </div>
            <div class="sect6">
              <img class="card-img-top rounded" src="../assets/imgs/anne-edgar-119383.jpg" alt="">
            </div>
            <div class="sect7">
              <img class="card-img-top rounded" src="../assets/imgs/first.jpg" alt="">
            </div>
            <div class="sect8">
              <img class="card-img-top rounded" src="../assets/imgs/ethan-robertson-134952.jpg" alt="">
            </div>
            <div class="sect9">
              <img class="card-img-top rounded" src="../assets/imgs/jennifer-pallian-173716.jpg" alt="">
            </div>
            <div class="sect10">
              <img class="card-img-top rounded" src="../assets/imgs/fourth.jpg" alt="">
            </div>
          </div>
            <!-- <div class="copy">
                <h1>An inspiring quote</h1>
                <p>/-- file not found --/</p>
            </div> -->
        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'grid'
}
</script>
<style scoped>
.grid{
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap: 0.8em;
  grid-auto-rows: minmax(70px);
}

.grid > div{
  /* padding: 0.8em; */
}

.sect1{
  grid-column: 1/3;
  grid-row: 1/4
}
.sect2{
  grid-column: 2/4;
  grid-row: 4/6
}
.sect3{
  grid-column: 3;
  grid-row: 1
}
.sect4{
  grid-column: 3;
  grid-row: 2
}
.sect5{
  grid-column: 1/3;
  grid-row: 6
}
.sect6{
  grid-column: 1;
  grid-row:4
}

.sect9{
  grid-column: 3;
  grid-row: 6
}
.sect8{
  grid-column: 1;
  grid-row: 7
}
.sect7{
  grid-column: 2;
  grid-row: 7
}
.sect10{
  grid-column: 3;
  grid-row: 7
}
</style>


