import { useSelector } from 'react-redux'
import Header from '@/components/Header'
import ShowCase from '@/components/ShowCase'
import { useModalStatus } from '@/redux/card/cardSlice'
import Modal from '@/components/Modal'

function Home() {
  const statusModal = useSelector(useModalStatus)
  return (
    <>
      {statusModal ? <Modal /> : ''}
      <Header />
      <ShowCase />
    </>
  )
}
export default Home
