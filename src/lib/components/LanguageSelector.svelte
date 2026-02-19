<script lang="ts">
  import { locale, loading, initialized } from '$lib/translations';

  const languages = [
    { val: 'en', flag: 'https://flagcdn.com/w20/us.png', alt: 'English' },
    { val: 'it', flag: 'https://flagcdn.com/w20/it.png', alt: 'Italian' }
  ];

  const selectFlag = (value: string) => {
    $locale = value;
  };
</script>

<div class="lang-selector">
  {#if $initialized}
    {#each languages as lang}
      <button
        on:click={() => selectFlag(lang.val)}
        disabled={$loading}
        class:active={$locale === lang.val}
      >
        <img src={lang.flag} alt={lang.alt} />
      </button>
    {/each}
  {/if}
</div>

<style>
  @media print {
    div {
      display: none;
    }
  }

  .lang-selector {
    position: fixed;
    top: var(--spacing-2);
    right: var(--spacing-2);
    display: flex;
    gap: 4px;
    z-index: 100;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: block;
  }

  button {
    border: 2px solid transparent;
    padding: 4px;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  button.active {
    border-color: var(--color-link, #136c73);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
