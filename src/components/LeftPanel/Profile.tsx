export const Profile = () => (
  <div className="flex items-center p-2">
    <img
      className="w-20 h-20 rounded-full"
      src="https://github.com/risaddex.png"
      alt="me"
    />
    <div className="ml-5">
      <strong className="text-lg">Danilo Romano</strong>
      <div className="flex items-center">
        <img src="icons/level.svg" alt="level" />
        <p className="text-xs mt-2 ml-2">Level 123</p>
      </div>
    </div>
  </div>
)
