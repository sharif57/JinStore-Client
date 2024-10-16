import Arrivals from "./Arrivals";
import Banner from "./Banner";
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
  </div>;
};
export default Home;