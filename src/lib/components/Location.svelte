<script>
  import RowContainer from './RowContainer.svelte';
  import Location from './icons/Location.svelte';

  export let city;
  export let state;
</script>

<RowContainer>
  <Location width={'16px'} height={'16px'} />
  <span>{city}, {state}</span>
</RowContainer>
