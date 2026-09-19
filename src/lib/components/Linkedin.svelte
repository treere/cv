<script>
  import RowContainer from './RowContainer.svelte';
  import Linkedin from './icons/Linkedin.svelte';

  let { name } = $props();
</script>

<a
  href={`https://linkedin.com/in/${name}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn profile"
>
  <RowContainer>
    <Linkedin width={'16px'} height={'16px'} />
    <span>{name}</span>
  </RowContainer>
</a>
