import "./styles.css";
import CoverPage from "./components/CoverPage";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <div className="app">
      <CoverPage />
      <MainPage />
    </div>
  );
}
