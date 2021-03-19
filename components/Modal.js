export const Modal = {
    template: `
        <div class="modal fade" id="userModal">
          <div class="modal-dialog">
            <div class="modal-content" style="background-color: #FFEEBA;">

              <!-- header -->
              <div class="modal-header">
                <h5 class="modal-title">{{userForModal.name}}</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              <!-- body -->
              <div class="modal-body modal-body-info py-0" v-for="(value, key) in userForModal" :key="key">
                {{key}} : {{value}}
              </div>
              
              <!-- footer -->
              <div class="modal-footer py-1">
                <button type="button" class="btn btn-secondary py-1" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
    `,
    props: ["userForModal"],
}