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
    margin-bottom: var(--spacing-3);

    .title {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      color: var(--color-link);
      position: relative;
      margin-top: 0;
      margin-bottom: var(--spacing-2);
      padding-bottom: var(--spacing-1);
      letter-spacing: 1px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 3px;
        background: var(--color-link);
        border-radius: 2px;
      }
    }

    .body {
      text-align: justify;
    }
  }
</style>
