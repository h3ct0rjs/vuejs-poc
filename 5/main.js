// Filters and Computed Data
const app = new Vue({
	el: '#app',
	data: {
		friends: [ 'harry potter', 'alex' ],
		harry: {
			first: 'Mr Harry ',
			last: 'Potter',
			age: 25,
			cc: '1234567890123456',
		},
		aniita: {
			first: 'Ms Ana Maria',
			last: 'Potter',
			age: 19,
			cc: '1234567890122901',
		},
	},
	computed: {
		ageInaYear() {
			return this.aniita.age + 1;
		},
	},
	filters: {
		//similar to pipes
		fullName(value) {
			return `${value.first} ${value.last}`;
		},
		cardFormat(number) {
			return '***-'.repeat(3) + number.slice(12, 16);
		},
	},
	methods: {
		incrementAge(person) {
			person.age += 1;
		},
		decrementAge(person) {
			if (person.age > 0) {
				person.age -= 1;
			}
		},
	},

	template: `
        <div>
        <div>
            <h2>Name: {{harry|fullName}}</h2>
            <h2>age: {{harry.age}}</h2>
            <h2>CC: {{harry.cc|cardFormat}}</h2>
            --
            <h2>Name: {{aniita|fullName}}</h2>
            <h2>Age: {{ageInaYear}} <button v-on:click="incrementAge(aniita)">+</button> <button @click="decrementAge(aniita)">-</button></h2>
            <h2>CC: <i>{{aniita.cc|cardFormat}}</i></h2>
            
        </div>
        
        <div style="color:red">
            <h2 v-for="friend in friends">{{friend}}</h2>
        </div>
        </div>
    `,
});
