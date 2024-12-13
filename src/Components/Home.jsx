import BestSeller from "./BestSeller";
import NewArrival from "./NewArrival";
import AnnounceMent from "./AnnounceMent";
import BestPicks from "./BestPicks";
import ShopTheLoolk from "./ShopTheLoolk";
import WhyUgao from "./WhyUgao";
import Swipper from "./swipper";
import Store from "./Store"
import Banner from "./Banner";

const Home = () => {

  return (
    <>
      <AnnounceMent/>
      <Banner/>
      <Store />
      <Swipper/>
      <BestPicks/>
      <BestSeller/>
      <NewArrival/>
      <ShopTheLoolk/>
      <WhyUgao/>
    </>
  );
};

export default Home;
