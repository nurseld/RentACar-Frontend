import { LANGUAGE_CODES } from './language';
import Cookies from 'js-cookie';
import { tr, enUS } from 'date-fns/locale';

// Sistem dilini ayarlamak için kullanılır.
export const setSystemLanguage = (language) => {
    Cookies.set('Accept-Language', language, { expires: 365 });
};

// Sistem dilini almak için kullanılır.
// Eğer sistem dilini belirten bir çerez yoksa, varsayılan olarak "tr" (Türkçe) dönülür.
export const getSystemLanguage = () => Cookies.get('Accept-Language') || 'tr';

// date-fns kütüphanesi için lokalizasyon ayarlarını döndürür.
// getFnsLocale() fonksiyonu, sistem diline göre doğru lokalizasyon ayarlarını döndürür.
// Dil koduna (LANGUAGE_CODES.TR veya LANGUAGE_CODES.EN) göre switch-case yapısı kullanılır.
export const getFnsLocale = () => {
    const lang = getSystemLanguage();
    switch (lang) {
        case LANGUAGE_CODES.TR:
            return tr; // Türkçe lokalizasyon ayarlarını döndürür.
        case LANGUAGE_CODES.EN:
            return enUS; // İngilizce (ABD) lokalizasyon ayarlarını döndürür.
        default:
            return tr; // Varsayılan olarak Türkçe lokalizasyon ayarlarını döndürür.
    }
};

// Kullanıcı arayüzü dil kodunu döndürür.
// getLocale() fonksiyonu, sistem diline göre doğru dil kodunu döndürür.
// Dil koduna (LANGUAGE_CODES.TR veya LANGUAGE_CODES.EN) göre switch-case yapısı kullanılır.
export const getLocale = () => {
    const lang = getSystemLanguage();
    switch (lang) {
        case LANGUAGE_CODES.TR:
            return LANGUAGE_CODES.TR; // Türkçe dil kodunu döndürür.
        case LANGUAGE_CODES.EN:
            return LANGUAGE_CODES.EN; // İngilizce dil kodunu döndürür.
        default:
            return tr; // Varsayılan olarak Türkçe dil kodunu döndürür.
    }
};