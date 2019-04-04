import {i18n} from '../core/services/i18n';

export default (locale: string): void => {
    i18n.setLocale(locale);
};
