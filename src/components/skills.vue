<template>
<div class="card mb-3">
  <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(/src/assets/img/icons/spot-illustrations/corner-4.png);">
  </div>
    <div class="card-body position-relative">
      <div class="row">
        <div class="col-lg-8">
          <h3>Employees Managements</h3>
          <p class="mb-0">Documentation and examples API: <a href="https://comsci.srru.ac.th/qc/employees" target="blank">https://comsci.srru.ac.th/qc/employees</a></p>
          <!-- <a class="btn btn-link btn-sm ps-0 mt-2" href="https://getbootstrap.com/docs/5.1/content/tables/" target="_blank">Tables on Bootstrap<span class="fas fa-chevron-right ms-1 fs--2"></span></a> -->
        </div>
      </div>
    </div>
</div>
<Table/>
</template>

<script>
import Table from './table/table_emp.vue'
export default {
  components:{Table}
}
</script>

<style>
</style>

