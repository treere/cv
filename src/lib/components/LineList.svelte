<script lang="ts">
  let { list }: { list: string[] } = $props();
</script>

<ul>
  {#each list as element}
    <li>{element}</li>
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-1);
  }

  li {
    background: var(--color-link-light);
    color: var(--color-link);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid #e8e6e1;

    @media print {
      background: #f0f0f0 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      padding: 2px 8px;
      font-size: 11px;
    }
  }
</style>
