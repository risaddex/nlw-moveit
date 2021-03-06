import styled from 'styled-components'
import { ActiveChallenge as Form } from '../RightPanel/Challenges'

const StyledForm = styled.div`
  grid-column: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 350px;
  height: 60vh;
  min-height: 400px;
  margin-right: 3rem;
`
const FormHeader = styled(Form.Header)`
  flex: 1;
  border: none;
  background: url('/logo.svg') no-repeat;
  background-position: left top;
  background-size: contain;
`

const FormMain = styled.main`
  flex: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.primary};
  
  gap: 1rem;
  align-items: center;
  /* margin-right: 2.5rem; */

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: calc(100% / 6);
      height: auto;
    }

    p {
      padding: 1rem;
      flex: 1;
      text-align: left;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.gray};
      
    }
  }
`
const FormFooter = styled.footer`
  flex: 1;
  display: flex;

  input {
    flex: 1;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.116),
      rgba(0, 0, 0, 0.05)
    );
    /* outline: none; */
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
    border: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  button {
    min-width: 20%;
  }
`

export const LoginForm = () => {
  return (
    <StyledForm>
      <Form>
        <FormHeader />
        <FormMain>
          <div>
            <h3>Bem vindo</h3>
          </div>
          <div>
            <img src="github.svg" alt="github logo" />
            <p>Faça login com seu github para começar</p>
          </div>
        </FormMain>
        <FormFooter>
          <input type="text" placeholder={`digite seu username`}/>
          <button type="submit" />
        </FormFooter>
      </Form>
    </StyledForm>
  )
}
