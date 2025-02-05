import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'
import Channel from './pages/Channel'
import Header from './components/seciton/Header'
import Main from './components/seciton/Main'
import Footer from './components/seciton/Footer'


const App = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Main>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/today' element={<Today/>}></Route>
            <Route path='/developer' element={<Developer/>}></Route>
            <Route path='/webd' element={<Webd/>}></Route>
            <Route path='/website' element={<Website/>}></Route>
            <Route path='/gsap' element={<Gsap/>}></Route>
            <Route path='/port' element={<Port/>}></Route>
            <Route path='/youtube' element={<Youtube/>}></Route>
            <Route path='/channel/:channelID' element={<Channel/>}></Route>
            <Route path='/video/:videoID' element={<Video/>}></Route>
            <Route path='/search/:searchID' element={<Search/>}></Route>
            <Route path='/*' element={<Not/>}></Route>
          </Routes>
          
          </Main>
          <Footer/>
        </BrowserRouter>
    )
}

export default App