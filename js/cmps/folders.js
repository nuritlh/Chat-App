export default {
    template: `
            <section class="folders">
                <div class="flex height-100">
                    <div class="nav-bar flex flex-col">
                        <i @click="openNavBar" class="fas fa-bars nav-btn"></i>
                        <img class="icon-img" src="./img/icons/W.png">
                        <img class="icon-img" src="./img/icons/FB.png">

                        <img class="icon-img" src="./img/icons/V.png">
                        <img class="icon-img" src="./img/icons/S.png">
                        <img class="icon-img" src="./img/icons/N.png">
                    </div>
                    <div class="inbox-nav" :class="{'display-none':!openNav}" >
                        <div class="inbox-header flex space-around align-center">
                            <p class="inbox" >Inbox</p>
                            <i class="fas fa-user-plus"></i>
                        </div>
                            <ul class="inbox-list clean-list">
                                <li @click="showAllMsg">All Messages</li>
                                <li>Unread</li>
                                <li>Draft</li>
                                <li>Teams</li>
                                <li>Groups</li>
                                <li>Channels</li>
                                <li>Location</li>
                                <li>Media</li>
                                <li>Help</li>
                                <li>Settings</li>
                            </ul>
                    </div>
                </div>
                
            </section>
            `,
    data() {
        return {
            openNav: false
        }
    },
    methods: {
        openNavBar() {
            this.openNav = !this.openNav
        },
        showAllMsg() {
            console.log('showAllMsg');

        }
    }
};
