// import { useFruits } from '../hooks/useFruits.ts'

import { Outlet } from 'react-router-dom'
function App() {
  // const { data } = useFruits()

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
