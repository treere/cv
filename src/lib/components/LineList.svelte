<script>
  export let list;
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
    background: linear-gradient(135deg, var(--color-link-light), var(--color-white-background));
    color: var(--color-link);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    @media print {
      background: #f0f0f0 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      padding: 2px 8px;
      font-size: 11px;
    }
  }
</style>
