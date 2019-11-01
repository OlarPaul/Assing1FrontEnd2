<template>
<div id="app" class="container-fluid">
    <h4>Caregiver</h4>
    <nav>
        <router-link class="btn btn-secondary" to="/caregiver/add">Add Caregiver</router-link>
        <router-link class="btn btn-secondary" to="/caregiver/list">Caregiver List</router-link>
    </nav>
      <br/>
        <router-view/>
</div>
</template>

<script>
import http from "../http-common";

export default {
  name: "caregiver",
  props: ["caregiver"],
  methods: {
    /* eslint-disable no-console */
    updateActive() {
      var data = {
        id: this.caregiver.id,
        name: this.caregiver.name,
        gender: this.caregiver.gender,
        address: this.caregiver.address,
      };

      http
        .put("/caregiver" + this.caregiver.id, data)
        .then(response => {
          this.caregiver.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCaregiver() {
      http
        .delete("/caregiver" + this.caregiver.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>