<template>
  <div v-if="this.caregiver">
    <h4>Caregiver</h4>
    <div>
      <label>Name: </label> {{this.caregiver.name}}
    </div>
    <div>
      <label>BirthDate: </label> {{this.caregiver.birthDate}}
    </div>
    <div>
      <label>Gender: </label> {{this.caregiver.gender}}
    </div>
    <div>
      <label>Gender: </label> {{this.caregiver.address}}
    </div>
  
    <span class="button is-small btn-danger" v-on:click="deleteCaregiver()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Customer...</p>
  </div>
</template>
 
<script>
import {HTTP} from "../http-common";

export default {
  name: "caregiver",
  props: ["caregiver"],
  methods: {
    /* eslint-disable no-console */
    updateCaregiver() {
      var data = {
        id: this.caregiver.id,
        name: this.caregiver.name,
        birthDate: this.caregiver.birthDate,
        gender: this.caregiver.gender,
        address: this.caregiver.address
      };
      HTTP
        .get("caregiver/list/:id"+ this.caregiver.id, data)
        .then(response => {
          console.log("Aaa");
          this.caregiver.id= response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCaregiver(id) {
      HTTP
        .delete("/caregiver/list" + id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/caregiver');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>