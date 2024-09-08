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
      background: var(--color-light-background);
      margin: var(--spacing-4) var(--spacing-1);
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
