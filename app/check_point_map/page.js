import dynamic from 'next/dynamic'
const checkpoints = [
    {
        name:"adwa00",
        lat:9.033212044971174,
        long:38.753324137751264,
        desc:"The Adwa Museum in Addis Ababa is a testament to one of the most pivotal events in Ethiopian and African history—the Battle of Adwa. This institution serves as a national monument celebrating the victory of Ethiopian forces over the Italian invaders on March 1, 1896, a victory that ensured Ethiopia's sovereignty and became a symbol of resistance against colonialism across Africa Location: Situated in the heart of Addis Ababa, the museum is easily accessible and is located within a cultural complex that includes other historical landmarks. It stands as a beacon of national pride and educational resource in the capital city of Ethiopia. Exhibits: The Adwa Museum features a wide array of exhibits that provide visitors with a comprehensive understanding of the Battle of Adwa and its significance"
    },
    {
        name:"entoto",
        lat:9.116572664337024,
        long:38.77209318233144,
        desc:"Entoto Natural Park is located on Mount Entoto, the northern border of Addis Ababa. It is about 5 km2. It takes more than a day to tour and engage in all park activities. Entoto park (እንጦጦ ፓርክ) is part of the Beautifying Sheger Project and is designed, made, and funded by Ethiopians. It has shops, resting areas\WC (every 1.5 km), cafeterias, restaurants, Kuriftu Resort, an art center, amphitheater, and free Wi-Fi. It was constructed in a year and was inaugurated on October 10, 2020."
    },
]

const OpenStreetMap = dynamic(() => import('../../components/OpenStreetMap'), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <h1 className='text-center'>OpenStreetMap</h1>
      <OpenStreetMap checkpoints={{checkpoints}}/>
    </>
  )
}

export default Home