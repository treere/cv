<script>
  import Icon from './Icon.svelte';
  export let icon;
</script>

<div>
  <Icon name={icon} size="16px" />
  <slot />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
</style>
