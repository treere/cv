<script>
  export let title;
</script>

<h3>{title}</h3>
<slot />

<style lang="scss">
  h3 {
    margin: var(--spacing-2) 0 var(--spacing-1);
  }
</style>
