const Login = () => (
  <div className="flex flex-col items-center min-h-screen px-4 pt-12 bg-[url('/background1.jpg')] bg-cover bg-center">
    <div className="text-center max-w-sm mx-auto p-8 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome Back!</h1>
      <p className="text-gray-600 mb-8">Sign in to access your account.</p>
      <form className="space-y-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
        />
        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors transform hover:scale-105"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
);

export default Login;
