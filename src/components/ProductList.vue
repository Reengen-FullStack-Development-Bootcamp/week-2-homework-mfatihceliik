<template>
  <div class="hello">
    <h1>Product Card Overview</h1>

    <div class="product-card" v-for="product in products" :key="product.id"> 
      <div>
        <b-card
          :title="product.name"
          :img-src="product.imageUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 25rem; float: left; margin: 20px;"
          class="mb-2"
        >
          <b-card-text>
            <p class="thick">Description: {{ product.description }}</p>
          </b-card-text>
          <b-card-text>
                                <i 
                              class="fas fa-star"
                              style="color: orange" 
                              v-for="(product, i) in product.star" :key="i"
                            >
                            </i>
                            <i 
                              class="fas fa-star"
                              v-for="(product, i) in (5 - product.star)" :key="i"
                            >
                            </i>

          </b-card-text>
          <b-card-text>
            <p class="thick">Location: {{ product.location }}</p>
          </b-card-text>

          <router-link class="customBtn" :to="{ name: 'ProductDetail', params: { id: product  } }"> 
          Go Detail</router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

import Data from "./Data.json"

export default {
  name: "ProductList",
  props: {},
  data() {
    return {
      products: Data.products
      
    };
  },
  methods: {
    log(data) {
      console.log(data.name)
    }
  }
};
</script>

<style scoped>
p.thick {
  font-weight: bold;
}
.customBtn {
  background: rgb(6, 216, 139);
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  max-width: 50px;
  text-decoration: none;
  color: black;
}
.customBtn:hover {
  background:rgb(0, 255, 0)
}
.customBtn a {
  text-decoration: none;
}
</style>
