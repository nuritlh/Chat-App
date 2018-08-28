import folders from '../cmps/folders.js';
import filterInbox from '../cmps/filter.js'
import inboxList from '../cmps/inboxList.js'
import appService from '../service/app-service.js'
import msgDetails from '../cmps/msgDetails.js'

export default {
  template: `
    <section class="home-page flex wrap height-100 container">
        <folders ></folders>
        <div class="user-msgs-list">
          <filterInbox ></filterInbox>
          <inboxList :allMsg="allMsg" v-on:selected="selectedMsg"></inboxList>
        </div>
        <div class="msg-details-container height-100">
          <msgDetails class=" height-100" v-if="selectedChat" :selectedChat="selectedChat"></msgDetails>
        </div>
    </section>
    `,
  components: { folders, filterInbox, inboxList, msgDetails },
  data() {
    return {
      allMsg: [],
      selectedChat: null
    }
  },
  created() {
    appService.query().then(allMsg => {
      this.allMsg = allMsg;
      this.selectedChat = allMsg[0]
    });
  },
  methods: {
    selectedMsg(msg) {
      this.selectedChat = msg
      console.log('selectedChat', msg);
    }
  }
};
