<script>
  import RowContainer from './RowContainer.svelte';
  import Github from './icons/Github.svelte';

  export let username;
</script>

<RowContainer>
  <Github width={'16px'} height={'16px'} />
  <a href={`http://github.com/${username}`}>{username}</a>
</RowContainer>
