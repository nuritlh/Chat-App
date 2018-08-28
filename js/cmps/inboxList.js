import previewMsg from './previewMsg.js'
export default {
    props: ['allMsg'],

    template: `
      <section class="inbox-list">
      <div>
              <preview-msg v-for="msg in allMsg" :key="msg.id" :msg="msg" v-on:selected="selectedMsg" ></preview-msg>
          </div>
      </section>
      `,
    components: { previewMsg },
    created() {
        console.log('allMsg-list', this.allMsg);

    },
    methods: {
        selectedMsg(msg) {
            this.$emit('selected', msg);
        }
    }
};
