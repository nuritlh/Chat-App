
import renderMsg from './renderMsg.js'
import appService from '../../js/service/app-service.js'
export default {
  props: ['selectedChat'],
  template: `
      <section >
        <div class="flex height-100">
          <div class="height-100">
            <div class="details-msg">
              <div class="from-user">{{selectedChat.userdetails.fullName}}</div>
              <div class="msg-container">
                <renderMsg v-for="(msg, idx) in selectedChat.msgs" :key="idx" :msg="msg"></renderMsg>
              </div>
            </div>
            <div class="flex align-center new-msg">
              <input  @keyup.enter="sendMsg" class="text-msg" v-model="txt" type="text" placeholder="Type your message...">
              <div @click="sendMsg" class="send"><i class="fas fa-arrow-circle-right"></i></div>
            </div>
          </div>
          <div class="user-details">
            <img class="details-user-img" :src=selectedChat.userdetails.img>
            <div class="text-center user-details-name">{{selectedChat.userdetails.fullName}}</div>
          </div>
        </div>
      </section>
      `,
  components: { renderMsg },
  data() {
    return {
      txt: ''
    }
  },
  computed: {},
  methods: {
    sendMsg() {
      var newMsgSent = {
        txt: this.txt,
        room: this.selectedChat.room,
        at: Date.now(),
        isRead: false,
      }
      console.log('newMsgSent', newMsgSent);
      appService.addNewMsg(newMsgSent).then(chatId => {
        this.txt = ''
      })
    }
  }
};
