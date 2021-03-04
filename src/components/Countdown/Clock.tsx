export const Clock = ({ minLeft, minRight, secLeft, secRight }) => {
  return (
    <>
      <div>
        <span>{minLeft}</span>
        <span>{minRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secLeft}</span>
        <span>{secRight}</span>
      </div>
    </>
  )
}
