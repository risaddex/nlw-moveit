import { useRouter } from 'next/router';
import { useState } from 'react';
import { myTheme } from '../../styles/theme';
import { Form, FormFooter, FormHeader, FormMain, StyledForm } from './Styled';

export const LoginForm = ({ setLoading, hasError }) => {
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
            <h3>{`Bem vindo`}</h3>
          </div>
          <div>
            <img src="github.svg" alt="github logo" />
            <p>{`Faça login com seu github para começar`}</p>
          </div>
        </FormMain>

        <FormFooter onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="userName"
            placeholder={`Digite seu username`}
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
            nome de usuário inválido
          </span>
        )}
      </Form>
    </StyledForm>
  )
}

