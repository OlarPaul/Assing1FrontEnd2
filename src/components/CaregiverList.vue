<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Caregiver List</h4>
            <ul>
                <li v-for="(caregiver, index) in caregiver" :key="index">
                    <router-link :to="{
                            name: 'caregiver list',
                            params: { caregiver: caregiver, name: caregiver.name, address: caregiver.address}
                        }">
                        <div v-on:click="deleteCaregiver(caregiver.caregiverId)">
                            {{caregiver.name}}
                        </div>
                        

                       
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import {HTTP} from "../http-common";
 
export default {
  name: "caregiver-list",
  data() {
    return {
      caregiver: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCaregivers() {
    HTTP
        .get("/caregiver/list") 
        .then(response => {
          this.caregiver = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCaregivers();
    },
    /* eslint-enable no-console */
     deleteCaregiver(id) {
        console.log("sssssssssssssssssssssssssssssssssssssss");
      HTTP
        .delete("/caregiver/list/" + id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/caregiver');
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCaregivers();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>