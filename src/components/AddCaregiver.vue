<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="caregiver.name" name="name">
        </div>

       
         <div class="form-group">
          <label for="birthDate">BirthDate</label>
          <input type="text" class="form-control" id="birthDate" required v-model="caregiver.birthDate" name="birthDate">
        </div>

         <div class="form-group">
          <label for="gender">Gender</label>
          <input type="text" class="form-control" id="gender" required v-model="caregiver.gender" name="gender">
        </div>

         <div class="form-group">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" required v-model="caregiver.address" name="address">
        </div>

        
        
        <button v-on:click="saveCaregiver" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCaregiver">Success</button>
    </div>
  </div>
</template>

<script>
import {HTTP} from "../http-common";

export default {
  name: "add-caregiver",
  data() {
    return {
      caregiver: {
        id: 0,
        address:'',
        birthDate: '',
        name:'',
        gender:'',
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveCaregiver() {
      var data = {
        id: this.caregiver.id,
        address: this.caregiver.address,
        birthDate: this.caregiver.birthDate,
        name: this.caregiver.name,
        gender: this.caregiver.gender
      };

      HTTP
        .post("/caregiver/add", data)
        .then(response => {
          this.caregiver.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newCaregiver() {
      this.submitted = false;
      this.caregiver = {};
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
