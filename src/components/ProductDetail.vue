<template>
  <div class="hello">
    <h1>Product Detail Overview</h1>

    <div
      v-for="i in product"
      :key="i.id"
      style="float: left; margin-left: 100px"
    >
      <div>
        <b-card
          :title="i.name"
          :img-src="i.imageUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 25rem; float: left; margin: 20px"
          class="mb-2"
        >
          <b-card-text>
            <p class="thick">Description: {{ i.description }}</p>
          </b-card-text>
          <b-card-text>
            <p class="thick">Price: {{ i.price }}</p>
          </b-card-text>
          <b-card-text>
            <i
              class="fas fa-star"
              style="color: orange"
              v-for="it in i.star"
              :key="it"
            >
            </i>
            <i class="fas fa-star" v-for="it in 5 - i.star" :key="it"></i>
          </b-card-text>
          <b-card-text>
            <p class="thick">Location: {{ i.location }}</p>
          </b-card-text>
        </b-card>
      </div>
    </div>

    <div style="float: left; margin: 20px; margin-left: 50px">

      <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
        </div>
        <input v-model="name"
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Surname</span>
        </div>
        <input v-model="surname"
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
        </div>
        <input v-model="email"
          type="email"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Hes Code</span>
        </div>
        <input v-model="hesCode"
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Day</span>
        </div>
        <input v-model="day"
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />

        <button style="margin-top:10px" type="button" class="btn btn-info btn-lg"
         @click="check(name, surname, email, hesCode, day)">Check</button>
    </div>

    <div v-if="checks">
      <div v-for="item in userJson" :key="item">
        <ul class="list-group" style="max-width:40rem; margin:27px;">
          <li class="list-group-item">{{item}}</li>
        </ul>
      </div>
      <button style="margin-top:10px" type="button" class="btn btn-success btn-lg"
         @click="rent()">Rent</button>
    </div>



  </div>
</template>

<script>
export default {
  name: "productDetail",
  props: {},
  data() {
    return {
      product: this.$route.params,
      userJson: [],
      checks: false
    };
  },
  methods: {
    check(name, surname, email, hesCode, day) {
      this.userJson.push(name, surname, email, hesCode, day);
      console.log(this.userJson)
      this.checks = true;
    },
    rent(){
      alert("Thanks " + this.userJson[0]);
    }
  },
};
</script>
