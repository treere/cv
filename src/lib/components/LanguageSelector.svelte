<script lang="ts">
  import { locale } from '$lib/translations';

  const languages = [
    { val: 'en', flag: 'https://flagcdn.com/w20/us.png', alt: 'Italian Flag' },
    { val: 'it', flag: 'https://flagcdn.com/w20/it.png', alt: 'US Flag' }
  ];

  const selectFlag = (value: string) => {
    $locale = value;
  };
</script>

<div>
  {#each languages as lang}
    <button on:click={() => selectFlag(lang.val)}>
      <img src={lang.flag} alt={lang.alt} />
    </button>
  {/each}
</div>

<style>
  @media print {
    div {
      display: none;
    }
  }
  img {
    width: 20px;
    height: 20px;
  }

  button {
    border: 0;
    padding: 5px;
  }
</style>
