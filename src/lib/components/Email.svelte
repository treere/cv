<script>
  import RowContainer from './RowContainer.svelte';
  import Email from './icons/Email.svelte';

  let { email } = $props();
</script>

<a href={`mailto:${email}`} aria-label="Send email">
  <RowContainer>
    <Email width={'16px'} height={'16px'} />
    <span>{email}</span>
  </RowContainer>
</a>
