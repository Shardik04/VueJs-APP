<template>
	<div>
		<h1>Games Developed for Different Platforms</h1>
		<input type="search" placeholder="Seacrch for Games (By Names, Platform)" v-model="search" class="form-control" />
		<div v-for="game in filteredGames">
			<div v-if="game.api_rate_limit"></div>
			<div class="bglwhite border-1 m10 p4" v-else>
				<div> Title : {{ game.title }}</div>
				<div> Platform: {{ game.platform }} </div>
				<div> Score: {{ game.score }} </div>
				<div> Genre: {{ game.genre }} </div>
				<div> Editors Choice: {{ game.editors_choice }} </div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {
		mapActions
	}
	from 'vuex'

	export default {
		data() {
				return {
					search: ''
				}
			},
			created() {
				this.$store.dispatch('SET_NEW_GAMES')
			},
			computed: {
				getGames() {
						return this.$store.getters.newGames;
					},
					filteredGames() {
						var vm = this;
						return this.getGames.filter((item) => {
							if (item.api_rate_limit) {
								return;
							}
							return item.title.toLowerCase().indexOf(vm.search.toLowerCase()) > -1 || item.platform.toLowerCase().indexOf(vm.search.toLowerCase()) > -1;
						});
					}
			}
	}

</script>

<style type="text/css" scoped>
	.m10 {
		margin: 10px;
	}
	
	.p4 {
		padding: 4px;
	}
	
	.form-control {
		height: 34px;
		padding: 6px;
		line-height: 1.42857143;
		color: #555555;
		background-color: #ffffff;
		background-image: none;
		border: 1px solid #d9d9d9;
		margin: 10px;
	}
	
	.border-1 {
		border: 1px solid #212121;
	}

</style>
