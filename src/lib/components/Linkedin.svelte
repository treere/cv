<script>
  import RowContainer from './RowContainer.svelte';
  import Linkedin from './icons/Linkedin.svelte';

  export let name;
</script>

<a href={`https://linkedin.com/in/${name}`} target="_blank" aria-label="LinkedIn profile">
  <RowContainer>
    <Linkedin width={'16px'} height={'16px'} />
    <span>{name}</span>
  </RowContainer>
</a>
