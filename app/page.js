import Link from 'next/link';
import WeatherPage from "./mainPage/page";
import Navbar from './components/page';


export default function Home() {

  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main className="bg-#2987ff-50">
      <Navbar/>
      <WeatherPage/>
      <li><Link className={linkStyles} href="./forecastPage/forecastPage/">7 Day Forecast</Link></li>
      
    </main>
  );
}
