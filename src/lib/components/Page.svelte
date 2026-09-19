<script lang="ts">
  import type { Snippet } from 'svelte';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';
  let {
    central,
    topSidebar,
    bottomSidebar
  }: { central: Snippet; topSidebar: Snippet; bottomSidebar: Snippet } = $props();
</script>

<div class="container">
  <div class="central">
    <div class="central-header">
      <LanguageSelector />
    </div>
    {@render central()}
  </div>
  <div class="sidebar">
    <div class="top-sidebar">
      {@render topSidebar()}
    </div>
    <div class="bottom-sidebar">
      {@render bottomSidebar()}
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
    box-shadow: 0 8px 32px rgba(37, 36, 35, 0.12);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e8e6e1;

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

  .central-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--spacing-2);
    margin-top: calc(var(--spacing-1) * -1);

    @media (min-width: 1000px) {
      margin-top: calc(var(--spacing-2) * -1);
    }

    @media print {
      display: none;
    }
  }

  .sidebar {
    min-width: 280px;
    background: var(--color-dark-background);
    display: flex;
    flex-direction: column;

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
      background: rgba(255, 255, 255, 0.04);
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
        transition: opacity 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1);

        &:hover {
          opacity: 0.8;
          text-decoration: underline;
          text-underline-offset: 3px;
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
