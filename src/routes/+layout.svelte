<script lang="ts">
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';
</script>

<LanguageSelector />
<div>
  <slot></slot>
</div>

<style type="scss">
  :global {
    body {
      background: linear-gradient(135deg, #e8ecef 0%, #dde1e4 100%);
      margin: var(--spacing-4) var(--spacing-1);
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: var(--spacing-4);
      font-family: 'Roboto', sans-serif;
      color: var(--color-main-text);
      line-height: 1.6;
      font-size: 15px;
    }

    a {
      text-decoration: none;
    }

    a:hover,
    a:focus {
      text-decoration: none;
    }

    @media print {
      body {
        background: white;
        padding: 0;
        font-size: 11pt;
      }

      .lang-selector {
        display: none !important;
      }
    }
  }
</style>
