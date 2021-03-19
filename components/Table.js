import { Modal } from "./Modal.js"

export const Table = { 
  template: `
    <div>
      <hr style="border: 2px solid LightSeaGreen;">
      
      <!-- Users Table -->
      <table class="table table-bordered">
        <thead>
          <tr class="table-sm table-info">
            <th class="w-25">Full name</th>
            <th class="w-25">E-mail</th>
            <th class="w-25">City</th>
            <th class="w-25">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-sm"
              v-for="user in users"
              :key="user.id"
              @click="getUserInfo(user.id)"
              @dblclick="modalOpen(user.id)"
              style="cursor: pointer; background-color: #FFEEBA; padding-left: 50px;"
              onMouseOver="this.style.backgroundColor='#BEE5EB'"
              onMouseOut="this.style.backgroundColor='#FFEEBA'">
            <th>{{user.name}}</th>
            <td>{{user.email}}</td>
            <td>{{user.address.city}}</td>
            <td>{{user.company.name}}</td>
          </tr>
        </tbody>
      </table>
      
      <hr style="border: 2px solid LightSeaGreen;">

      <!-- Section Below for User Name and Detailes -->
      <div class="my-4">
        <h3>{{userForSectionBelow.name}}</h3>
        <ul class="list-group">
          <li class="list-group-item py-0"
              style="background-color: #FFEEBA;"
              v-for="(value, key) in userForSectionBelow"
              :key="key">{{key}} : {{value}}</li>
        </ul>
      </div>

      <!-- Modal Component -->
      <modal-component :user-for-modal="userForModal"/>
    </div>
  `,
  data: function () {
    return {
      users: [],
      userForSectionBelow: {},
      userForModal: {},
      time: null
    }
  },
  components: {
    "modal-component": Modal
  },
  mounted() {
    // Get the first five users' information when component is rendered
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.users = response.data.slice(0, 5))
      .catch(error => console.log(error))
  },
  methods: {
    // When single-clicked on the table rows, get single user detail
    // ClearTimeout and SetTimeout is used to avoid double-click event to call also single-click event on the same element
    getUserInfo(id) {
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(response => this.userForSectionBelow = response.data)
          .catch(error => console.log(error))
      }, 300)
    },
    // When double-clicked on the table rows, get single user detail for Modal and open it
    modalOpen(id) {
      clearTimeout(this.time)
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          this.userForModal = response.data
        })
      .catch(error => console.log(error))
      // Open modal
      $("#userModal").modal()
    }
  }
}