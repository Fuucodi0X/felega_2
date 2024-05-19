import dynamic from 'next/dynamic'


const OpenStreetMap = dynamic(() => import('../../components/OpenStreetMap'), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <h1 className='text-center'>OpenStreetMap</h1>
      <OpenStreetMap />
    </>
  )
}

export default Home