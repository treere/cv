<script>
  import IconText from './IconText.svelte';
  export let city;
  export let state;
</script>

<IconText icon="location.svg">
  <span>{city}, {state}</span>
</IconText>
