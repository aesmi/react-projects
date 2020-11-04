// import React, { useState, useEffect } from 'react'
// import Loading from './Loading'
// import Tours from './Tours'
// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'
// function App() {
//   const [loading, setLoading] = useState(true)
//   const [tours, setTours] = useState([])

//   const fetchTours = async () => {
//     setLoading(true)
//     try {
//       const response = await fetch(url)
//       const tours = await response.json()
//       setLoading(false)
//       setTours(tours)
//     } catch (error) {
//       setLoading(false)
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchTours()
//   }, [])
//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     )
//   }

//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>no tours left</h2>
//           <button className='btn' onClick={() => fetchTours()}>
//             refresh
//           </button>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main>
//       <Tours tours={tours} />
//     </main>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    //check id of every tour in tours and return it if the tour is not the tour we're passing in
    //basically excludes the tour we pass in
    const newTours = tours.filter((tour) => tour.id !== id)
    //set our state to our new filtered array that does not have the id we passed in
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  //only displays this when our tours array is 0
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {/* passing in our remoteTour function as a prop */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App