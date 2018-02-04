<template>
	<div>
		<h1>Browse top Kickstarter projects conveniently.</h1>
		<input type="search" placeholder="Seacrch (By Names i.e title)" v-model="search" class="form-control" />
		<div class="cf p10">
			Search By Location :
			<select v-model="selected" class="select-box">
				<option value="">Choose...</option>
				<option v-for="option in getCountry" :value="option.location">
					{{ option.location }}
				</option>
			</select>
		</div>
		<div style="color:red;">Selected City: {{ selected }} </div>

		<div v-for="game in filteredGames">
			<div class="bglwhite border-1 m10 p4">
				<a v-bind:href="'https://www.kickstarter.com' + game.url" target="_blank"> Title : {{ game.title }}</a>
				<div> Details: {{ game.blurb }} </div>
				<div> Amount Pledged: {{game | pledge}} </div>
				<div> Location: {{ game.location }} || state: {{ game.state }} || Country: {{ game.country }} </div>
				<div> Number of Backers: {{ game | backers }} </div>
				<div> Created By: {{ game.by }} </div>
				<div> Funded: {{ game | percent }} </div>
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
		asyncData({
			store,
			router
		}) {
			// return the Promise from the action
			console.log("asyncData");
			return store.dispatch('SET_NEW_GAMES', router);
		},
		data() {
			return {
				search: '',
				country: [],
				selected: ''
			}
		},
		computed: {
			getGames() {
				return this.$store.getters.newGames;
			},
			filteredGames() {
				var vm = this;
				return this.getGames.filter((item) => {
					return item.title.toLowerCase().indexOf(vm.search.toLowerCase()) > -1 &&
						item.location.toLowerCase().indexOf(vm.selected.toLowerCase()) > -1;
				});
			},
			getCountry() {
				this.country = this.getGames.filter((item) => {
					return item.location;
				});
				return this.country
			}
		},
		filters: {
			pledge: function(value) {
				value = value["amt.pledged"];
				return '$' + value;
			},
			backers: function(value) {
				value = value["num.backers"];
				return value;
			},
			percent: function(value) {
				value = value["percentage.funded"];
				return value + '%';
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

	.select-box {
		width: 50%;
		padding: 10px;
		margin: 10px;
	}

	.form-control {
		height: 34px;
		padding: 6px;
		color: #555555;
		background-color: #ffffff;
		background-image: none;
		border: 1px solid #d9d9d9;
		margin: 10px;
		width: 80%;
	}

	.border-1 {
		border: 1px solid #212121;
	}
</style>
