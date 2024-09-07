<div class="container">
  <div class="central">
    <slot name="central" />
  </div>
  <div class="sidebar">
    <div class="top-sidebar">
      <slot name="top-sidebar" />
    </div>
    <div class="bottom-sidebar">
      <slot name="bottom-sidebar" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    margin: auto;
    background: var(--color-white-background);
    flex-direction: column-reverse;
    max-width: 1000px;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }

  .central {
    padding: var(--spacing-3);

    @media (min-width: 1000px) {
      padding: var(--spacing-8);
      padding-right: var(--spacing-5);
    }
  }

  .sidebar {
    min-width: 280px;
    background: var(--color-too-dark-background);
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) and (min-width: 570px) {
      flex-direction: row;
      align-items: center;
    }

    .top-sidebar {
      background: var(--color-dark-background);
      padding: var(--spacing-4);
    }

    .bottom-sidebar {
      padding: var(--spacing-4);
      color: var(--color-link-light);

      :global(a) {
        color: var(--color-link-light);
      }
    }
  }
</style>
