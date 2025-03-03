import './App.css'
import { AppShell } from '@mantine/core'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  return (
    <AppShell>
      <Header />
      <Navbar />
    </AppShell>
  )
}

export default App
