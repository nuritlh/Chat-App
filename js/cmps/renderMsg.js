
export default {
  props: ['msg'],
  template: `
      <section class="selected-msg">
          <div v-if="msg.creator.id!=='5b58aa7616f42101ded3362a'"  class="flex align-center">
            <div>
              <img class="chat-img" :src="msg.creator.img">
              <div class="date-at">{{date}}</div>
            </div>
          <div class="taxt-mag-body">{{msg.txt}}</div>
        </div>
        <div v-if="msg.creator.id==='5b58aa7616f42101ded3362a'" class="flex align-center my-msg">
            <div >
              <img class="my-chat-img" :src="msg.creator.img">
              <div class="date-at">{{date}}</div>
            </div>
          <div class="taxt-mag-body my-taxt-mag-body">{{msg.txt}}</div>
        </div>
      </section>
      `,
  computed: {
    date: function () {
      var m = moment.utc(this.msg.at)
      return m.format('HH:mm')

    }
  },
  methods: {
  }
};
