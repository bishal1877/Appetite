import React, { useState } from 'react';
import "./Home.css";
import Header from '../../component/Header/Header';
import Exploremenu from '../../component/Exploremenu/Exploremenu';
function Home() {
    const [category,setcategory]= useState('All');
  return (
    <div>
        <Header/>
        <Exploremenu  category={category} setcategory={setcategory} />
    </div>
  )
}

export default Home;