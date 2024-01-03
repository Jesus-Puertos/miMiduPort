import ingles from './en.json';
import spanish from './es.json';

const LENGUAJES = {
    INGLES: 'en',
    SPANISH: 'es'
};


export const getI18N = (
    { currentLocale= 'es' } :
     {currentLocale : string | undefined}
     ) =>{
    if(currentLocale === LENGUAJES.INGLES) return ingles;
    if(currentLocale === LENGUAJES.SPANISH) return spanish;
    return spanish;
}