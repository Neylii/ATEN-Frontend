<template>
  <div class="register">
    <TopTitle msg="Skapa ett konto" />
    <fieldset>
      <form class="form" v-on:submit.prevent="submitForm">
        <FormInput
          labelText="Användarnamn"
          id="username"
          placeholder="Användarnamn"
          v-model="form.username"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Lösenord"
          type="password"
          id="password"
          placeholder="Välj nått bra"
          v-model="form.password"
          :requiredBool="true"
        ></FormInput
        ><br />
        <FormInput
          labelText="Förnamn"
          id="firstName"
          placeholder="Ditt tilltalsnamn"
          v-model="form.firstName"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Efternamn"
          id="lastName"
          placeholder="Ditt efternamn"
          v-model="form.lastName"
          :requiredBool="true"
        ></FormInput>
        <FormInput
          labelText="Telefonnummer"
          id="phoneNumber"
          placeholder="Telefonnummer"
          v-model="form.userAddresses[0].phoneNumber"
          :requiredBool="false"
        ></FormInput
        ><br />
        <FormInput
          labelText="Adress"
          id="address"
          placeholder="Gatuadress"
          v-model="form.userAddresses[0].address"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Postnummer"
          id="zipcode"
          placeholder="Postnr"
          v-model="form.userAddresses[0].zipcode"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Stad"
          id="city"
          placeholder="Stad"
          v-model="form.userAddresses[0].city"
          :requiredBool="false"
        ></FormInput>
        <FormInput
          labelText="Land"
          id="country"
          placeholder="Land"
          v-model="form.userAddresses[0].country"
          :requiredBool="false"
        ></FormInput>
        <div class="form-group-btn">
          <button type="submit" class="btn btn-outline-dark mx-1">
            <b>Skapa konto</b>
          </button>
          <button
            type="reset"
            class="btn btn-outline-dark mx-1"
            onclick="return confirm('Säker på att du vill rensa?')"
          >
            <b>Rensa formulär</b>
          </button>
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
import TopTitle from "../components/TopTitle";
import * as jsFile from "../assets/1.js";

export default {
  name: "CreateAccount",
  components: {
    FormInput,
    TopTitle,
  },
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
      this.form.password = jsFile.createMd5(
        this.form.password + consts.keys.key
      );

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
          // Redirects to new site.
          router.push("Products");
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
  margin: 25em;
}

.form {
  display: grid;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  border: #53787f solid 0.2em;
  padding: 1em;
}

.form-group-btn {
  margin-top: 0.3em;
  border-radius: 1.5em;
}

.reset-btn {
  margin-top: -10%;
}
</style>
