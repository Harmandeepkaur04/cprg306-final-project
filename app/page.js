import Image from "next/image";
import HomePage from "./pages/homePage";
import WeatherPage from "./mainPage/mainpage";

export default function Home() {
  return (
    <main className="bg-blue-50">
      <WeatherPage/>
    </main>
  );
}
