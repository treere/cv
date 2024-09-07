<script>
  export let list;
</script>

<ul>
  {#each list as element}
    <li>{element}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 10px;
  }

  li {
    display: inline-block;
    padding: 0.25em 0.4em;
  }
</style>
