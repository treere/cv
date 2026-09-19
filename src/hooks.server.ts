import type { Handle } from '@sveltejs/kit';
import { locale } from '$lib/translations';

export const handle: Handle = async ({ event, resolve }) => {
  const raw = event.request.headers
    .get('accept-language')
    ?.split(',')[0]
    ?.split(';')[0]
    ?.split('-')[0]
    ?.toLowerCase();
  const lang = raw === 'it' ? 'it' : raw === 'en' ? 'en' : null;
  if (lang) {
    locale.set(lang);
  }
  return resolve(event);
};
