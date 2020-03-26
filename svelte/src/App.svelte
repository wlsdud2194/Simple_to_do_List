<script>
	import CardTemplate from '~/components/CardTemplate.svelte';
	import TodoInput from '~/components/TodoInput.svelte';
	import TodoitemList from '~/components/TodoitemList.svelte';
</script>

<style lang="scss">
	@import './style/global.scss';
</style>

<CardTemplate title={"Simple Svelte Todo List"}>
	<TodoInput />
	<TodoitemList />
</CardTemplate>
