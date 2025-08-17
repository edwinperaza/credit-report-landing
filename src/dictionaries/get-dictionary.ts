
import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    const lang = locale && Object.keys(dictionaries).includes(locale) ? locale : 'en';
    return dictionaries[lang]();
  }
