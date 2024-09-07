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
    padding-left: 10px;
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 0.25em 0.4em;
  }
</style>
