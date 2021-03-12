import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { myTheme } from '../../styles/theme';
import { Form, FormFooter, FormHeader, FormMain, StyledForm } from './Styled';

export const LoginForm = ({ setLoading, hasError }) => {
  const {data} = useContext(LanguageContext)
  const router = useRouter()

  const [name, setName] = useState('')

  const handleClick = () => {
    setLoading()
    router.replace(`/app?user=${name}`, '/app')
    setName('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledForm>
      <Form>
        <FormHeader />
        <FormMain>
          <div>
            <h3>{data.welcome}</h3>
          </div>
          <div>
            <img src="github.svg" alt="github logo" />
            <p>{data.login}</p>
          </div>
        </FormMain>

        <FormFooter onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="userName"
            placeholder={data.input}
            required
          />
          <button
            disabled={name.length === 0}
            type="submit"
            onClick={handleClick}
          />
        </FormFooter>
        {hasError && (
          <span
            style={{
              position: 'sticky',
              display: 'flex',
              alignSelf: 'center',
              color: myTheme.colors.danger,
            }}
          >
            {data.loginError}
          </span>
        )}
      </Form>
    </StyledForm>
  )
}

