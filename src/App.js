import "./styles.css";
import SearchBox from "./SearchBox";

export default function App() {
  return (
    <div className="App">
      <h1>Search Autocomplete</h1>
      <div>
        <SearchBox limit={10} />
      </div>
    </div>
  );
}
