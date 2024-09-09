<script>
  import RowContainer from './RowContainer.svelte';
  import Linkedin from './icons/Linkedin.svelte';

  export let name;
</script>

<RowContainer>
  <Linkedin width={'16px'} height={'16px'} />
  <a href={`https://linkedin.com/in/${name}`}>{name}</a>
</RowContainer>
