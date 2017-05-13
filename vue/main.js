new Vue({
	el: '#app',
	data: {
		posts: null,
	},
	methods: {
		fetchData() {
			const xhr = new XMLHttpRequest();
			const self = this;
			xhr.open('GET', 'data.json');
			xhr.onload = () => {
				self.posts = JSON.parse(xhr.responseText);
			}
			xhr.send();
		},
	},
	created() {
		this.fetchData();
	},
});
