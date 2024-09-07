<script>
  export let image;
  export let name;
  export let role;
</script>

<div class="container">
  <img src={image} alt="profile pic" />
  <div>
    <h1>{name}</h1>
    <h2>{role}</h2>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1 {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 900;
    margin: var(--spacing-2) 0 var(--spacing-1);
    color: var(--color-link-light);
    text-wrap: nowrap;
  }

  h2 {
    color: var(--color-link-light);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }

  img {
    border-radius: 100%;
  }
</style>
