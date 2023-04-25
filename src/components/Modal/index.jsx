import { useDispatch } from 'react-redux'
import { showModal } from '@/redux/card/cardSlice'
import { Link } from 'react-router-dom'

function Modal() {
  const dispatch = useDispatch()
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 justify-center flex items-center "
      onClick={() => dispatch(showModal(false))}
    >
      <div className="relative w-full md:max-w-xl max-w-sm max-h-full">
        <div
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => dispatch(showModal(false))}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 md:text-2xl text-lg font-normal text-gray-500 dark:text-gray-400">
              The vehicle name or model cannot be left blank. Please enter a
              value.
            </h3>
            <Link
              to="/"
              className="text-white bg-indigo-700 hover:bg-indigo-800 font-semibold py-3 px-5 rounded-lg md:text-lg text-sm"
              onClick={() => dispatch(showModal(false))}
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
