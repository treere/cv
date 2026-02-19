<script>
  export let title;
</script>

<h3>{title}</h3>
<slot />

<style lang="scss">
  h3 {
    margin: var(--spacing-2) 0 var(--spacing-1);
    font-size: 15px;
    font-weight: 600;
    color: var(--color-subtitle);
  }
</style>
