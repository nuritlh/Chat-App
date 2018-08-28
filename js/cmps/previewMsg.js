
export default {
    props: ['msg'],
    template: `
      <section class="pre-msg" @click="openMsgs">
          <div class="flex align-center">
            <img class="userdetails-img" :src=msg.userdetails.img>
            {{msg.userdetails.fullName}}
        </div>
      </section>
      `,
    computed: {},
    methods: {
        openMsgs() {
            this.$emit('selected', this.msg);
        }
    }
};
