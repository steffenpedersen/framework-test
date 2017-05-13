new Vue({
	el: '#app',
	data: {
		posts: null,
	},
	methods: {
		fetchData(){
			this.$http.get("data.json")
				.then(function(response){
					this.posts = response.data;
			});
		}
	},
	created() {
		this.fetchData();
	},
});
