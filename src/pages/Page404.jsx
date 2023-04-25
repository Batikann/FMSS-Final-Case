import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white ">
      <div className="text-center flex flex-col gap-6 items-center  p-8 rounded-lg">
        <h1 className="text-8xl font-bold tracking-widest">404</h1>
        <h2 className="text-4xl">Sorry,we couldn't find this page.</h2>
        <h3 className="text-2xl">
          But dont worry, you can find plenty of other things on our homepage.
        </h3>
        <Link
          to="/"
          className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg p-3 rounded-lg"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
export default Page404
