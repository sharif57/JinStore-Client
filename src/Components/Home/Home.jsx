import Arrivals from "./Arrivals";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Featured from "./Featured";
import Make from "./Make";
import OnlyWeek from "./OnlyWeek";
import Popular from "./Popular";
import Products from "./Products";
import Title from "./Title";

const Home = () => {
  return <div>
    <Banner></Banner>
    <Title></Title>
    <OnlyWeek></OnlyWeek>
    <Arrivals></Arrivals>
    <Products></Products>
    <Featured></Featured>
    <Make></Make>
    <BestSellers></BestSellers>
    <Popular></Popular>
  </div>;
};
export default Home;