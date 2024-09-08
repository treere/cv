import type { Handle } from '@sveltejs/kit';
import { locale } from '$lib/translations';

export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  if (lang) {
    locale.set(lang);
  }
  return resolve(event);
};
