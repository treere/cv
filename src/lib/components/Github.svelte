<script>
  import IconText from './IconText.svelte';
  export let username;
</script>

<IconText icon="github.svg">
  <a href={`http://github.com/${username}`}>{username}</a>
</IconText>
