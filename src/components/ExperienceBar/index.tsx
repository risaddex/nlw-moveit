export const ExperienceBar = () => {
  return (
    <header className="flex w-full justify-center">
      <div className="flex-grow border h-6  mt-2">
        <div className={`bg-green-500 h-6 rounded-md`} style={{ width: `75%` }}>
          <span className="absolute left-1/2 translate-x-1/2">50/100 xp</span>
        </div>
      </div>
    </header>
  )
}
