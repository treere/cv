import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'cv',
      loader: async () => (
        await import('./translations/en.json')
      ).default,
    },
    {
      locale: 'it',
      key: 'cv',
      loader: async () => (
        await import('./translations/it.json')
      ),
    }
  ]});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
