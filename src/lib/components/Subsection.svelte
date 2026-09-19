<script lang="ts">
  import type { Snippet } from 'svelte';
  let { title, children }: { title: string; children: Snippet } = $props();
</script>

<h3>{title}</h3>
{@render children()}

<style lang="scss">
  h3 {
    margin: var(--spacing-2) 0 var(--spacing-1);
    font-size: 15px;
    font-weight: 600;
    color: var(--color-subtitle);
  }
</style>
