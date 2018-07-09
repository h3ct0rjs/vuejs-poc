const app = new Vue({
	el: '#app',
	data: {
		friends: [],
	},
	mounted() {
		//curl -H "Content-Type:application/json" -X POST -d '{"name":"friend1"}' http://rest.learncode.academy/api/vue-5/friends/
		fetch('http://rest.learncode.academy/api/vue-5/friends')
			.then((response) => response.json())
			.then((data) => {
				this.friends = data;
			});
	},
	template: `
    <div>
        <li v-for="friend in friends">{{friend.name}} <b>{{friend.id}}</b></li>
    </div>
    `,
});
