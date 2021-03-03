import styled from 'styled-components'

const OuterClock = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: white;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }
    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`

export const Clock = ({ minLeft, minRight, secLeft, secRight }) => {
  return (
    <OuterClock>
      <div>
        <span>{minLeft}</span>
        <span>{minRight}</span>
      </div>
      <span> : </span>
      <div>
        <span>{secLeft}</span>
        <span>{secRight}</span>
      </div>
    </OuterClock>
  )
}
