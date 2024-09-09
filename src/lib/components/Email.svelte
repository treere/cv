<script>
  import RowContainer from './RowContainer.svelte';
  import Email from './icons/Email.svelte';

  export let email;
</script>

<a href={`mailto:${email}`}>
  <RowContainer icon="email.svg">
    <Email width={'16px'} height={'16px'} />
    <span>{email}</span>
  </RowContainer>
</a>
