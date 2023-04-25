function Skeleton() {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  return (
    <>
      {fakeData.map((data, i) => {
        return (
          <div className="max-w-xs rounded-lg bg-gray-800" key={i}>
            <div className="animate-pulse ">
              <img
                className="rounded-t-lg w-64 h-44 bg-gray-300"
                src=""
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 md:w-48 w-32 h-6 bg-gray-300 rounded-md"></h5>
                <p className="mb-3 md:w-36 w-24 h-6 bg-gray-300 rounded-md "></p>
                <p className="mb-3 md:w-28 w-20 h-6 bg-gray-300 rounded-md"></p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default Skeleton
