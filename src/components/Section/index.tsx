import { Wrapper } from '../Wrapper'

export const Section = ({ children }) => {
  return (
    <section className="flex-grow max-w-full grid grid-cols-2 gap-24 content-center">
      {children}
    </section>
  )
}
