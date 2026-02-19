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
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;

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
    background: linear-gradient(
      135deg,
      var(--color-too-dark-background),
      var(--color-dark-background)
    );
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    @media (max-width: 1000px) and (min-width: 570px) {
      flex-direction: row;
      align-items: center;
    }

    @media print {
      min-width: 200px;
      background: var(--color-too-dark-background) !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .top-sidebar {
      background: linear-gradient(
        135deg,
        var(--color-dark-background),
        var(--color-too-dark-background)
      );
      padding: var(--spacing-4);

      @media print {
        background: var(--color-dark-background) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }

    .bottom-sidebar {
      padding: var(--spacing-4);
      color: var(--color-link-light);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);

      :global(a) {
        color: var(--color-link-light);
        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1);

        &:hover {
          opacity: 0.8;
          transform: translateX(4px);
          text-decoration: none;
        }
      }
    }
  }

  @media print {
    .container {
      box-shadow: none;
      border-radius: 0;
      max-width: 100%;
    }

    .central {
      padding: 20px;
    }
  }
</style>
