import Arrivals from "./Arrivals";
import Banner from "./Banner";
import Featured from "./Featured";
import OnlyWeek from "./OnlyWeek";
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
  </div>;
};
export default Home;