<script lang="ts">
  import { locale } from '$lib/translations';

  let { children } = $props();

  $effect(() => {
    document.documentElement.lang = $locale;
  });
</script>

<svelte:head>
  <title>Andrea Tomasi — Tech Lead · Full-stack & CV Engineer</title>
  <link rel="canonical" href="https://treere.github.io/cv/" />
  {@html `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Andrea Tomasi', jobTitle: 'Tech Lead', address: { '@type': 'PostalAddress', addressLocality: 'Milan', addressCountry: 'IT' }, url: 'https://treere.github.io/cv/', sameAs: ['https://github.com/treere', 'https://linkedin.com/in/andrea-tomasi-b19921100'], knowsAbout: ['Elixir', 'TypeScript', 'C++', 'Python', 'Rust'] })}</script>`}
</svelte:head>

<div>
  {@render children()}
</div>

<style type="scss">
  :global {
    body {
      background: #f2f1ee;
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: var(--spacing-4);
      font-family: 'Roboto', sans-serif;
      color: var(--color-main-text);
      line-height: 1.6;
      font-size: 15px;
    }

    a {
      text-decoration: none;
    }

    a:hover,
    a:focus {
      text-decoration: none;
    }

    @media print {
      body {
        background: white;
        padding: 0;
        font-size: 11pt;
      }

      .lang-selector {
        display: none !important;
      }
    }
  }
</style>
