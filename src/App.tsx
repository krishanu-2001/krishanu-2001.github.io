import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Page } from './components/Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Page slug="home" />} />
          <Route path="/projects" element={<Page slug="projects" />} />
          <Route path="/github" element={<Page slug="github" />} />
          <Route path="/publications" element={<Page slug="publications" />} />
          <Route path="/experience" element={<Page slug="experience" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
