<script>
  import RowContainer from './RowContainer.svelte';
  import Github from './icons/Github.svelte';

  export let username;
</script>

<a href={`http://github.com/${username}`} target="_blank" aria-label="GitHub profile">
  <RowContainer>
    <Github width={'16px'} height={'16px'} />
    <span>{username}</span>
  </RowContainer>
</a>
