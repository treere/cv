<div class="main-container">
  <slot></slot>
</div>

<style type="scss">
  :global {
    body {
      background: var(--color-light-background);
      padding: var(--spacing-4) var(--spacing-1);
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: var(--color-main-text);
      line-height: 1.4;
      font-size: 14px;
    }

    a {
      text-decoration: none;
    }

    a:hover,
    a:focus {
      text-decoration: underline;
    }
  }
</style>
