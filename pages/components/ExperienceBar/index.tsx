export const ExperienceBar = () => {
  return (
    <header className="flex w-full">
      <div className="flex-grow border relative mx-5 mt-2">
        <div className={`bg-green-500 h-10`} style={{ width: `50%` }}>
          <div className="absolute text-center inset-x-0 top-1/4">50/100</div>
        </div>
      </div>
    </header> 
  )
}
