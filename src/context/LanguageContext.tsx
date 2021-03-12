import {
  createContext,
  ReactNode,

  useState
} from 'react'
import idiom from '../../language.json'
import { LanguageDataProps } from '../types'

interface LanguageContextData {
  data: LanguageDataProps
  toggleLanguage: () => void
}

interface LanguageProviderProps {
  children: ReactNode
  lazyMode?: boolean
  language: string
}

export const LanguageContext = createContext({} as LanguageContextData)

export const LanguageProvider = ({ children, language:lang }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(lang)

  const data = language === 'ptbr' ? idiom.ptbr: idiom.en
  
  const toggleLanguage = () => {
    if (language === 'ptbr') {
      setLanguage('en')
    } else {
      setLanguage('ptbr')
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        data,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
