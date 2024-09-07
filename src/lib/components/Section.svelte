<script>
  export let title;
</script>

<div class="section">
  <div class="title">{title}</div>
  <div class="body">
    <slot />
  </div>
</div>

<style lang="scss">
  .section {
    margin-bottom: var(--spacing-2);

    .title {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 500;
      color: var(--color-link);
      position: relative;
      margin-top: 0;
      margin-bottom: var(--spacing-1);
    }

    .body {
      text-align: justify;
    }
  }
</style>
