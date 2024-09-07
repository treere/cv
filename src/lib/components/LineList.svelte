<script>
  export let list;
</script>

<ul>
  {#each list as element}
    <li>{element}</li>
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style: none;
    padding-left: var(--spacing-1);
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 0 var(--spacing-1);
  }
</style>
