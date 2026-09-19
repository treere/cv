<script lang="ts">
  import { locale, loading, initialized } from '$lib/translations';

  const languages = [
    { val: 'en', flag: '🇺🇸', label: 'EN', alt: 'English' },
    { val: 'it', flag: '🇮🇹', label: 'IT', alt: 'Italian' }
  ];

  const selectFlag = (value: string) => {
    $locale = value;
  };
</script>

<div class="lang-selector" role="group" aria-label="Language">
  {#if $initialized}
    <div class="segmented">
      {#each languages as lang}
        <button
          onclick={() => selectFlag(lang.val)}
          disabled={$loading}
          class:active={$locale === lang.val}
          aria-label={lang.alt}
          aria-pressed={$locale === lang.val}
          title={lang.alt}
        >
          <span aria-hidden="true">{lang.flag}</span>
          {lang.label}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  @media print {
    div {
      display: none;
    }
  }

  .lang-selector {
    display: flex;
    justify-content: flex-end;
  }

  .segmented {
    display: inline-flex;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 999px;
    padding: 3px;
    gap: 2px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  button {
    border: 0;
    padding: 5px 12px;
    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
    line-height: 1;
    color: var(--color-subtitle);
    transition:
      background 0.18s ease,
      color 0.18s ease,
      box-shadow 0.18s ease;
  }

  button:hover {
    color: var(--color-title);
  }

  button.active {
    background: white;
    color: var(--color-title);
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.08);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
