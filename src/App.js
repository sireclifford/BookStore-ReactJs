import './App.css';
import { Routes, Route } from 'react-router-dom';
import Head from './components/head/Head';
import Lessons from './components/lessons/Lessons';
import Category from './components/category/Category';

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route exact path="/" element={<Lessons />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
