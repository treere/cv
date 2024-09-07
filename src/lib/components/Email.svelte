<script>
  import IconText from './IconText.svelte';
  export let email;
</script>

<IconText icon="email.svg">
  <a href={`mailto:${email}`}>{email}</a>
</IconText>
