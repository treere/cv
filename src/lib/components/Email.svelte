<script>
  import RowContainer from './RowContainer.svelte';
  import Email from './icons/Email.svelte';

  export let email;
</script>

<RowContainer icon="email.svg">
  <Email width={'16px'} height={'16px'} />
  <a href={`mailto:${email}`}>{email}</a>
</RowContainer>
