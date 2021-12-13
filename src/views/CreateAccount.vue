<template>
  <div class="register">
    <fieldset>
      <legend><h2>Skapa konto:</h2></legend>
      <form class="form" v-on:submit.prevent="submitForm">
        <FormInput
          labelText="Användarnamn  "
          id="username"
          placeholder="Användarnamn"
          v-model="form.username"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Lösenord  "
          type="password"
          id="password"
          placeholder="Välj nått bra"
          v-model="form.password"
          :requiredBool="true"
        ></FormInput
        ><br />
        <FormInput
          labelText="Förnamn  "
          id="firstName"
          placeholder="Ditt förnamn"
          v-model="form.firstName"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Efternamn  "
          id="lastName"
          placeholder="Ditt efternamn"
          v-model="form.lastName"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Telefonnummer  "
          id="phoneNumber"
          placeholder="Telefonnummer"
          v-model="form.userAddresses[0].phoneNumber"
          :requiredBool="false"
        ></FormInput
        ><br />
        <FormInput
          labelText="Adress  "
          id="address"
          placeholder="Gatuadress"
          v-model="form.userAddresses[0].address"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Postnummer  "
          id="zipcode"
          placeholder="Postnr"
          v-model="form.userAddresses[0].zipcode"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Stad  "
          id="city"
          placeholder="Stad"
          v-model="form.userAddresses[0].city"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Land  "
          id="country"
          placeholder="Land"
          v-model="form.userAddresses[0].country"
          :requiredBool="false"
        ></FormInput>
        <div class="form-group-btn">
          <button type="submit"><b>Skapa konto</b></button>
          <button type="reset"><b>Rensa formuläret</b></button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import * as consts from "../assets/const.js";
import FormInput from "../components/FormInput";
import { ref } from "vue";

export default {
  name: "CreateAccount",
  components: { FormInput },
  data() {
    return {
      labelText: ref(""),
      form: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        userAddresses: [
          {
            address: "",
            zipcode: "",
            city: "",
            country: "",
            phoneNumber: "",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post(consts.urls.urlHost + "user/new", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        })
        .finally(() => {
          // Redirects to new site. Home-page for now
          router.push("Home");
        });
    },

    async submit() {
      await this.$store.dispatch("apiCall", "/user/new");
    },
  },
};
</script>
<style scoped>
.register {
  margin: 30em;
}

.form {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.form-group-btn {
  margin-top: 0.3em;
}
</style>
