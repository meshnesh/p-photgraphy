<template>
  <div>
    <app-nav></app-nav>
    <section class="content">
        <div class="inner">

            <div class="copy">
              <div class="row heading">
                <!-- <p>something</p> -->
                <!-- <header> -->
                  <h1>prices</h1>
                   <!-- <p>my photostudio</p> -->
                <!-- </header> -->
              </div>
              <div class="prices container">
                <div class="content1 rounded">
                  <h1 class="title">
                    personal shhoting
                  </h1>
                  <p>For One Person</p>
                  <div class="content">
                    <div>
                      <span class="sign">$</span>
                      <span class="price">29</span>
                      <span class="month"> /month</span>
                    </div>
                    <div class="products-profile">
                      <ul class="photo-products">
                        <li>30 treated electronic photos</li>
                        <li>100 photos on the disc</li>
                        <li>5 printed photos</li>
                      </ul>
                    </div>
                    <button type="button" class="btn btn-secondary btn-lg">continue reading</button>
                  </div>
                </div>
                <div class="content2 rounded">
                  <h1 class="title">
                    love story
                  </h1>
                  <p>For Couple</p>
                  <div class="content">
                    <div>
                      <span class="sign">$</span>
                      <span class="price">79</span>
                      <span class="month"> /month</span>
                    </div>
                    <div class="products-profile">
                      <ul class="photo-products">
                        <li>50 treated electronic photos</li>
                        <li> 150 photoson the disc</li>
                        <li>10 printed photos</li>
                      </ul>
                    </div>
                    <button type="button" class="btn btn-secondary btn-lg second-btn">continue reading</button>
                  </div>
                </div>
                <div class="content3 rounded">
                  <h1 class="title">
                    proffesional
                  </h1>
                  <p>For Model Agencies</p>
                  <div class="content">
                    <div>
                      <span class="sign">$</span>
                      <span class="price">99</span>
                      <span class="month"> /month</span>
                    </div>
                    <div class="products-profile">
                      <ul class="photo-products">
                        <li>Unlimited treated electronic photos</li>
                        <li>Unlimited photos on the disc</li>
                        <li>Unlimited printed photos</li>
                      </ul>
                    </div>
                    <button type="button" class="btn btn-secondary btn-lg">continue reading</button>
                  </div>
                </div>
              </div>
                <p class="about-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel aut voluptates, esse impedit illum tempora corporis neque ex amet temporibus atque, iusto dolorem. Ad dolor beatae nam optio unde!Asperiores quas suscipit atque a totam facilis, animi ut odit aliquid minus temporibus explicabo earum non, assumenda architecto ea. Excepturi nam beatae corrupti, necessitatibus ullam magni. Maiores maxime veniam cum.
                </p>


            </div>

        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'card'
}
</script>
<style scoped>
.title{
  font-weight: 900;
}
ul{
  list-style-type: none;
}

.products-profile{
  margin: 1em;
}

.photo-products{
  text-align: left;
  align-content: left;
  margin-left: 16%;
  width: 64%;
}

.prices{
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  /* grid-gap: 1em; */
  grid-auto-rows: 70px;
  /* padding: 1em; */
  grid-auto-rows: minmax(84px , auto);
}

.prices > div{
  padding-top: 24px;
}

.content1{
grid-column: 1;
grid-row:2/7;
/* background: #3949AB; */
box-shadow: -2px 0px 8px 0px red;
}
.content3{
grid-column: 3;
grid-row:2/7;
/* background: #3949AB; */
box-shadow: 2px 0px 8px 0px red;
}
.content2{
grid-column: 2;
grid-row:1/8;
/* background: #3949AB; */
z-index: 1000;
box-shadow: 0px 0px 16px 1px red;
padding-top: 24%!important;
}
.price{
  font-size: 56px;
  font-weight: 900;
}
.sign{
  font-size: 24px;
    font-weight: 900;
    position: absolute;
    margin-top: 6%;
    margin-left: -4%;
}
.month{
  font-weight: 900;
}

.second-btn{
  margin-top: 16%;
}
</style>


