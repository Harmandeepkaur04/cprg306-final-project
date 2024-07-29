import Link from 'next/link';
import WeatherPage from "./mainPage/mainpage";

export default function Home() {

  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  
  return (
    <main className="bg-#2987ff-50">
      <WeatherPage/>
      <li><Link className={linkStyles} href="./forecastPage/forecastPage/">7 Day Forecast</Link></li>
    </main>
  );
}
