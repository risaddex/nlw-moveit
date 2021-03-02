export const Countdown = () => {
  
  return (
    <div className="container flex items-center font-raj font-semibold">
      <div className="flex-grow flex justify-center shadow-md rounded lg:text-9xl text-8xl">
        <div className="count-container">
          <span>2</span>
          <span>5</span>
        </div>
        <span className="mx-5">:</span>
        <div className="flex-grow">
          <span>2</span>
          <span>5</span>
        </div>
      </div>
    </div>
  )
}