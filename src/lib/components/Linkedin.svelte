<script>
  import IconText from './IconText.svelte';
  export let name;
</script>

<IconText icon="linkedin.svg">
  <a href={`https://linkedin.com/in/${name}`}>{name}</a>
</IconText>
