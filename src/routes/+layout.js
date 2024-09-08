import { loadTranslations } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({}) => {
  const initLocale = 'it';

  await loadTranslations(initLocale, 'cv');

  return {};
};

export const prerender = true;
