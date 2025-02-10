const SplashScreen = () => {
  return (
    <main className="flex-1 w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Main container with pulsing animation */}
      <div className="relative flex flex-col items-center animate-pulse">
        {/* Large circular background */}
        <div className="absolute w-32 h-32 bg-amber-200 rounded-full blur-xl animate-ping opacity-75" />

        {/* Main logo circle */}
        <div className="relative w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full animate-spin">
            {/* Inner design elements */}
            <div className="w-full h-full relative">
              <div className="absolute inset-2 bg-amber-500 rounded-tl-full" />
              <div className="absolute inset-2 bg-white rounded-br-full" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-amber-800 text-xl font-semibold">
          Loading
          <span className="inline-flex space-x-1 ml-2">
            <span className="animate-bounce delay-75">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>

        {/* Rotating rings */}
        <div className="absolute w-40 h-40 border-4 border-amber-300 rounded-full animate-spin opacity-20" />
        <div className="absolute w-48 h-48 border-4 border-amber-400 rounded-full animate-spin opacity-10" />
        <div className="absolute w-56 h-56 border-4 border-amber-500 rounded-full animate-spin opacity-5" />
      </div>
    </main>
  )
}

export default SplashScreen
