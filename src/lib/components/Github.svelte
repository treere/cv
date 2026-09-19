<script>
  import RowContainer from './RowContainer.svelte';
  import Github from './icons/Github.svelte';

  let { username } = $props();
</script>

<a
  href={`https://github.com/${username}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub profile"
>
  <RowContainer>
    <Github width={'16px'} height={'16px'} />
    <span>{username}</span>
  </RowContainer>
</a>
