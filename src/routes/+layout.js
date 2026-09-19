import { browser } from '$app/environment';
import { loadTranslations } from '$lib/translations';

export const load = async ({ url }) => {
  const { pathname } = url;
  const initLocale = getInitialLocale();

  await loadTranslations(initLocale, pathname);

  return { locale: initLocale, route: pathname };
};

function getInitialLocale() {
  if (browser) {
    const lang = window.navigator.language.split('-')[0]?.toLowerCase();
    return lang === 'it' ? 'it' : 'en';
  }
  return 'en';
}

export const prerender = true;
