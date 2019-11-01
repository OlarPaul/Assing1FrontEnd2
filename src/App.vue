<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h3>MEDICAL CENTER</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/caregiver">Caregivers</router-link>
            <router-link class="btn btn-primary" to="/patients">Patients</router-link>
            <router-link class="btn btn-primary" to="/medication">Medication</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
