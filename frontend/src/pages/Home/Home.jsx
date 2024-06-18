import AppDownload from '../../components/AppDownload/AppDownload';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header'
import HeaderPart from '../../components/HeaderPart/HeaderPart'
import './Home.css'

import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <HeaderPart />
      <AppDownload />
      

    </div>
    
  );
};

export default Home