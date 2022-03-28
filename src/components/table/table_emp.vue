<template>
  <div class="card z-index-1 mb-3" id="recentPurchaseTable"  data-list='{"valueNames":["name","email","product","payment"],"page":7,"pagination":true}' v-if="rendor">
    <div class="card-header">
      <div class="row flex-between-center">
        <div class="col-6 col-sm-auto d-flex align-items-center pe-0">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Employees</h5>
        </div>
        <div class="col-6 col-sm-auto ms-auto text-end ps-0">
          <div id="table-purchases-replace-element">
            <button class="btn btn-falcon-default btn-sm" type="button" data-bs-target="#add" data-bs-toggle="modal">
              <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span>
              <span class="d-none d-sm-inline-block ms-1">Add Employee</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 py-0">
      <div class="table-responsive scrollbar">
        <div v-if="load">
              <Spin class="d-flex justify-content-center" />
            </div>
        <table class="table table-sm fs--1 mb-0 overflow-hidden">
          <thead class="bg-200 text-900">
            <tr>
              <th class="white-space-nowrap"></th>
              <th class="sort pe-1 align-middle white-space-nowrap" data-sort="name">Pic</th>
              <th class="sort pe-1 align-middle white-space-nowrap" data-sort="email">Name</th>
              <th class="sort pe-1 align-middle white-space-nowrap" data-sort="product">Department</th>
              <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="payment">Position</th>
              <th class="no-sort pe-1 align-middle data-table-row-action"></th>
            </tr>
          </thead>
            
          <tbody class="list" id="table-purchase-body" >
            <tr class="btn-reveal-trigger" v-for="lst in employee" :key="lst.id">
              <td class="align-middle" style="width: 28px;"></td>
              <th class="align-middle white-space-nowrap name">
                <div class="d-flex justify-content-center">
                  <div class="avatar avatar-xl">
                    <img class="rounded-circle" v-if="lst.pic != null" :src="'https://comsci.srru.ac.th/app/'+ lst.pic " />
                    <img class="rounded-circle" v-if="lst.pic == null" src="https://comsci.srru.ac.th/app/user.jpg" />
                  </div>
                  <!-- <div class="ms-2">Emma Watson</div> -->
                </div>
              </th>
              <td class="align-middle white-space-nowrap email">{{ lst.firstname }} {{ lst.lastname }}</td>
              <td class="align-middle white-space-nowrap product">{{ lst.department }}</td>
              <td class="align-middle white-space-nowrap product">
                <span>{{ lst.position }}</span>
              </td>
              <td class="align-middle white-space-nowrap text-end">
                <div class="dropstart font-sans-serif position-static d-inline-block">
                  <button
                    class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                    type="button"
                    id="dropdown0"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span class="fas fa-ellipsis-h fs--1"></span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown0">
                    <button class="dropdown-item" data-bs-target="#view" data-bs-toggle="modal" @click="edit(lst.id)">
                      <span class="text-500 fas fa-eye"></span> View
                    </button>
                    <button class="dropdown-item" data-bs-target="#edit" data-bs-toggle="modal" @click="edit(lst.id)">
                      <span class="text-500 fas fa-edit"></span> Edit
                    </button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item text-danger" @click="AlertDelete(lst.firstname, lst.id)">
                      <span class="text-danger fas fa-trash-alt"></span> Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <div class="row align-items-center">
        <div class="pagination d-none"></div>
        <div class="col">
          <p class="mb-0 fs--1">
            <span class="d-none d-sm-inline-block me-2" data-list-info="data-list-info"></span>
            <span class="d-none d-sm-inline-block me-2">&mdash;</span>
            <a class="fw-semi-bold" href="#!" data-list-view="*">
              View all
              <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
            </a>
            <a class="fw-semi-bold d-none" href="#!" data-list-view="less">
              View less
              <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
            </a>
          </p>
        </div>
        <div class="col-auto d-flex">
          <button class="btn btn-sm btn-primary" type="button" data-list-pagination="prev">
            <span>Previous</span>
          </button>
          <button class="btn btn-sm btn-primary px-4 ms-2" type="button" data-list-pagination="next">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="view" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div v-if="load2">
            <Spin class="text-center" />
          </div>
          <h5 class="modal-title" id="exampleModalLabel">Detail</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <h3 class="mb-3 alert alert-primary text-center">
              Employee ID :
              <span class="text-primary">{{ edit_id }}</span>
            </h3>
            <!-- <div class="modal-footer"></div> -->
            <div class="mt-2 row text-center">
              <div class="col-sm-4 d-flex align-items-center justify-content-center">
                <img class="rounded" style="width:50%" v-if="pic_edit != null" :src="'https://comsci.srru.ac.th/app/'+ pic_edit " />
                <img class="rounded" style="width:50%" v-if="pic_edit == null" src="https://comsci.srru.ac.th/app/user.jpg" />
              </div>
              <div class="col-sm text-start">
                <h6 class="text-dark py-1">
                  Name :
                  <br />
                  <h5 class="text-primary">• {{ firstname_edit }} {{ lastname_edit }}</h5>
                </h6>
                <h6 class="text-dark py-1">
                  Department :
                  <br />
                  <h5 class="text-primary">• {{ department_edit }}</h5>
                </h6>
                <h6 class="text-dark py-1">
                  Position :
                  <br />
                  <h5 class="text-primary">• {{ position_edit }}</h5>
                </h6>
              </div>
              <div class="col-sm text-start">
                <h6 class="text-dark py-1">
                  Created At :
                  <br />
                  <h6 class="text-primary">{{ edit_employee.created_at }}</h6>
                </h6>
                <h6 class="text-dark py-1">
                  Updated At :
                  <br />
                  <h6 class="text-primary">{{ edit_employee.updated_at }}</h6>
                </h6>
                <!-- <h6 class="text-dark text-start">Updated At : </h6><span class="text-primary">{{ edit_employee.updated_at }}</span> -->
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal add -->
  <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Employee</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="text-center">
              <span class="fas fa-user-plus text-secondary fs-5 mb-5 mt-5" style="font-size: 100px;"></span>
              <div class="row">
                <div class="input-group mb-3 col-sm">
                  <span class="input-group-text" id="basic-addon3">Firstname :</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Firstname" v-model="firstname" />
                </div>
                <div class="input-group mb-3 col-sm">
                  <span class="input-group-text" id="basic-addon3">Lastname :</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Lastname" v-model="lastname" />
                </div>
              </div>

              <div class="input-group mb-3 col-2">
                <span class="input-group-text" for="inputGroupSelect01">Department :</span>
                <select class="form-select" id="inputGroupSelect01" v-model="adddepartment">
                  <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
                </select>
              </div>

              <div class="input-group mb-5 col-2">
                <span class="input-group-text" for="inputGroupSelect01">Position :</span>
                <select class="form-select" id="inputGroupSelect01" v-model="position">
                  <option v-for="p_option in p_options" :key="p_option.value" :value="p_option.value">{{ p_option.name }}</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">Upload Image :</label>
                <input class="form-control" ref="fileInput" type="file" @input="pickFile" />
              </div>
              <div v-if="previewImage != null" class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"></div>
              <button v-if="previewImage != null" type="button" class="btn btn-danger" @click="clearpic">Clear File</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cleardata">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" :disabled="firstname.length < 1 || lastname.length < 1" @click="add">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal edit -->
  <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Employee : {{ edit_employee.firstname }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="text-center">
              <span class="fas fa-user-edit text-secondary fs-5 mb-5 mt-5" style="font-size: 100px;"></span>
              <div class="row">
                <div class="input-group mb-3 col-sm">
                  <span class="input-group-text" id="basic-addon3">Firstname :</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Firstname" v-model="firstname_edit" />
                </div>
                <div class="input-group mb-3 col-sm">
                  <span class="input-group-text" id="basic-addon3">Lastname :</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Lastname" v-model="lastname_edit" />
                </div>
              </div>

              <div class="input-group mb-3 col-2">
                <span class="input-group-text" for="inputGroupSelect01">Department :</span>
                <select class="form-select" id="inputGroupSelect01" v-model="department_edit">
                  <option v-for="option in edit_options" :key="option.value" :value="option.value">{{ option.name }}</option>
                </select>
              </div>

              <div class="input-group mb-5 col-2">
                <span class="input-group-text" for="inputGroupSelect01">Position :</span>
                <select class="form-select" id="inputGroupSelect01" v-model="position_edit">
                  <option v-for="p_option in edit_p_options" :key="p_option.value" :value="p_option.value">{{ p_option.name }}</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">Upload new Image :</label>
                <input class="form-control" ref="fileInput2" type="file" @input="pickFile2" />
              </div>
              <div v-if="previewImage2 != null" class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage2})` }"></div>
              <!-- <div  class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage2})` } " :src ="'https://comsci.srru.ac.th/app/'+ edit_employee.pic " ></div> -->
              <img class="imagePreviewWrapper" v-if=" previewImage2 == null && edit_employee.pic != null" :src="'https://comsci.srru.ac.th/app/'+ edit_employee.pic" style="width:28%;" />
              <img class="imagePreviewWrapper" v-if=" previewImage2 == null && edit_employee.pic == null" src="https://comsci.srru.ac.th/app/user.jpg" style="width:35%;" />
              <!-- <div v-if="previewImage2 == null"></div> -->
              <button v-if="previewImage2 != null" type="button" class="btn btn-danger" @click="clearpic2">Clear new File</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cleardata2">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            :disabled="firstname_edit == edit_employee.firstname && lastname_edit == edit_employee.lastname && previewImage2 == edit_employee.pic"
            @click="save_edit"
          >Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spin from '../spin/spin_div.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  components: { Spin },
  data() {
    return {
      rendor: true,
      edit_id: 0,
      previewImage: null,
      previewImage2: null,
      pic: null,
      id_delete: 0,
      get_firstname: '',
      get_lastname: '',
      get_department: '',
      get_position: '',
      firstname_edit: '',
      lastname_edit: '',
      department_edit: '',
      position_edit: '',
      pic_edit: '',
      firstname: '',
      lastname: '',
      adddepartment: 'Innovation',
      load: false,
      load2: false,
      title: 'hello world',
      position: 'Mechanical',
      options: [
        { value: 'Innovation', name: 'Innovation' },
        { value: 'Human Resources', name: 'Human Resources' },
        { value: 'Finance', name: 'Finance' },
        { value: 'Marketing', name: 'Marketing' },
        { value: 'IT', name: 'IT' },
      ],
      edit_options: [
        { value: 'Innovation', name: 'Innovation' },
        { value: 'Human Resources', name: 'Human Resources' },
        { value: 'Finance', name: 'Finance' },
        { value: 'Marketing', name: 'Marketing' },
        { value: 'IT', name: 'IT' },
      ],
      edit_p_options: [
        { value: 'Staff', name: 'Staff' },
        { value: 'Digital Officer', name: 'Digital Officer' },
        { value: 'Sales Officer', name: 'Sales Officer' },
        { value: 'Engineer', name: 'Engineer' },
        { value: 'Manager', name: 'Manager' },
        { value: 'Mechanical', name: 'Mechanical' },
        { value: 'Supervisor', name: 'Supervisor' },
      ],
      p_options: [
        { value: 'Staff', name: 'Staff' },
        { value: 'Digital Officer', name: 'Digital Officer' },
        { value: 'Sales Officer', name: 'Sales Officer' },
        { value: 'Engineer', name: 'Engineer' },
        { value: 'Manager', name: 'Manager' },
        { value: 'Mechanical', name: 'Mechanical' },
        { value: 'Supervisor', name: 'Supervisor' },
      ],
      // list:[
      //   {id:1, pic:'1.jpg', name:'nonpawit', department:'Innovation', position:'Lean Supervisor', finish:false},
      //   {id:2, pic:'2.jpg', name:'sumet', department:'Human Resources', position:'HR Supervisor', finish:false},
      //   {id:3, pic:'3.jpg', name:'danuphon', department:'Finance', position:'Manager', finish:false},
      //   {id:4, pic:'4.jpg', name:'Wannaree', department:'CEO', position:'CEO', finish:false}
      // ],
      employee: [],
      edit_employee: [],
    }
  },
  mounted() {
    this.load = true
    axios
      .get('https://comsci.srru.ac.th/qc/employees')
      // axios.get('https://api.publicapis.org/entries')
      .then((res) => {
        this.employee = res.data
        // console.log(this.employee)
        this.load = false
      })
      .catch((error) => {
        console.log(error)
        this.load = false
      })
  },
  methods: {
    reload(){
        this.load = true
        axios
          .get('https://comsci.srru.ac.th/qc/employees')
          // axios.get('https://api.publicapis.org/entries')
          .then((res) => {
            this.employee = res.data
            // console.log(this.employee)
            this.load = false
          })
          .catch((error) => {
            console.log(error)
            this.load = false
          })
    },
    save_edit() {
      const headers = {
        'Content-Type': 'multipart/form-data',
      }

      const data = {
        // id: this.edit_id,
        firstname: this.firstname_edit,
        lastname: this.lastname_edit,
        department: this.department_edit,
        position: this.position_edit,
        // pic: this.previewImage2,
      }
      var formdata = new FormData()
      formdata.append('firstname', this.firstname_edit)
      formdata.append('lastname', this.lastname_edit)
      formdata.append('department', this.department_edit)
      formdata.append('position', this.position_edit)
      formdata.append('pic_file', this.previewImage2)
      axios
        .post('https://comsci.srru.ac.th/qc/employeess/' + this.edit_id, formdata, { headers })
        .then((res) => {
          console.log(res)
          Swal.fire({
            title: 'Edit Successfully !',
            // text: "Can not delete this employee.",
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#009ED0',
          }).then((result) => {
            if (result.isConfirmed) {
              this.reload()
            }
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            title: 'Fail !',
            text: 'Can not update employee now.',
            icon: 'warning',
            confirmButtonText: 'Close',
            confirmButtonColor: '#009ED0',
          }).then((result) => {
            if (result.isConfirmed) {
              this.reload()
            }
          })
        })
    },
    edit(edit_id) {
      this.edit_id = null
      this.edit_id = edit_id
      this.load2 = true
      axios
        .get('https://comsci.srru.ac.th/qc/employees/' + edit_id)
        // axios.get('https://api.publicapis.org/entries')
        .then((res) => {
          this.edit_employee = res.data
          console.log(this.edit_employee)
          this.firstname_edit = this.edit_employee.firstname
          this.lastname_edit = this.edit_employee.lastname
          this.department_edit = this.edit_employee.department
          this.position_edit = this.edit_employee.position
          this.pic_edit = this.edit_employee.pic
          this.load2 = false
        })
        .catch((error) => {
          console.log(error)
          this.load2 = false
        })
    },
    clearpic() {
      this.previewImage = null
      this.$refs.fileInput.value = null
    },
    cleardata() {
      this.previewImage = null
      this.$refs.fileInput.value = null
      this.firstname = ''
      this.lastname = ''
    },
    clearpic2() {
      this.previewImage2 = null
      this.$refs.fileInput2.value = null
    },
    cleardata2() {
      this.previewImage2 = null
      this.$refs.fileInput2.value = null
      this.firstname = ''
      this.lastname = ''
    },
    add() {
      var formdata = new FormData()
      formdata.append('firstname', this.firstname)
      formdata.append('lastname', this.lastname)
      formdata.append('department', this.adddepartment)
      formdata.append('position', this.position)
      formdata.append('pic_file', this.previewImage)

      axios
        .post('https://comsci.srru.ac.th/qc/employees', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res)
          Swal.fire({
            title: 'Successfully !',
            // text: "Can not delete this employee.",
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#009ED0',
          }).then((result) => {
            if (result.isConfirmed) {
              this.reload()
            }
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            title: 'Fail !',
            text: 'Can not add employee now.',
            icon: 'warning',
            confirmButtonText: 'Close',
            confirmButtonColor: '#009ED0',
          }).then((result) => {
            if (result.isConfirmed) {
              
              this.reload()
            }
          })
        })
    },
    delete_emp(id) {
      axios
        .delete('https://comsci.srru.ac.th/qc/employees/' + id)
        .then((res) => {
          console.log(res)
          showAlert()
          this.reload()
        })
        .catch((error) => {
          console.log(error)
          showAlert()
          this.reload()
        })
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!')
    },
    AlertDelete(name, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'delete ' + name + ' from this table.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete('https://comsci.srru.ac.th/qc/employees/' + id)
            .then((res) => {
              console.log(res)
              Swal.fire({
                title: 'Deleted!',
                text: name + ' has been deleted.',
                icon: 'success',
                confirmButtonText: 'OK',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.reload()
                }
              })
            })
            .catch((error) => {
              console.log(error)
              Swal.fire({
                title: 'Fail !',
                text: 'Can not delete this employee.',
                icon: 'warning',
                confirmButtonText: 'Close',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.reload()
                }
              })
            })
        }
      })
    },
    //  selectImage () {
    //       this.$refs.fileInput.click()
    //   },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      this.pic = this.$refs.fileInput.files[0]
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
          console.log(this.pic)
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    pickFile2() {
      let input = this.$refs.fileInput2
      let file = input.files
      this.pic = this.$refs.fileInput.files[0]
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage2 = e.target.result
          console.log(this.pic)
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
  },
}
</script>

<style>
.table {
  text-align: center;
}
.imagePreviewWrapper {
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: contain;
  background-position: center center;
}
</style>

