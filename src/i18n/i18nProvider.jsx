
import {getConfig, useLang} from './Layout18n'
import {IntlProvider} from 'react-intl'
import { createIntl, createIntlCache } from 'react-intl';
const cache = createIntlCache();
//import deMessages from './messages/de.json'
import enMessages from './messages/en.json'
import ArMessages from './messages/ar.json'



export const allMessages = {

  en: enMessages,
  ar:ArMessages
}

const I18nProvider= ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}


const intlNonCom = createIntl({ locale:getConfig().selectedLang, messages: allMessages[getConfig().selectedLang], }, cache);
export {I18nProvider,intlNonCom}
