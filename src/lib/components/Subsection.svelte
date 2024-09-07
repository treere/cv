<script>
  export let title;
</script>

<h3>{title}</h3>
<slot />

<style lang="scss">
  h3 {
    margin: 10px 0 5px;
  }
</style>
