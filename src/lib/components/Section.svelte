<script lang="ts">
  import type { Snippet } from 'svelte';
  let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section class="section">
  <h2 class="title">{title}</h2>
  <div class="body">
    {@render children()}
  </div>
</section>

<style lang="scss">
  .section {
    margin-bottom: var(--spacing-3);

    .title {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-link);
      margin-top: 0;
      margin-bottom: var(--spacing-2);
      padding-bottom: var(--spacing-1);
      letter-spacing: 1.2px;
      border-bottom: 1px solid #e8e6e1;
    }

    .body {
      text-align: justify;

      :global(strong) {
        color: var(--color-link);
        font-weight: 600;
      }
    }
  }
</style>
