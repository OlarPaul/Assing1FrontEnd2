import Vue from "vue";
import Router from "vue-router";
import AddCaregiver from "./components/AddCaregiver.vue";
import Caregiver from "./components/Caregivers.vue";
import CaregiverList from "./components/CaregiverList.vue";
import CaregiverDetails from "./components/CaregiverDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "caregiver",
      alias: "/caregiver",
      component: Caregiver
    },
    {
      path: "/caregiver/add",
      name: "add",
      component: AddCaregiver
    },
    {
    path: "/caregiver/list/",
    name: "caregiver list",
    component: CaregiverList,
    children: [
      {
        path: "/caregiver/list/id",
        name: "caregiver-details",
        component: CaregiverDetails,
        props:true
      }
    ]
    },
  ]
});