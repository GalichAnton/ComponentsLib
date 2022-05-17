import "./App.css";
import DynamicPagination from "./components/DynamicPagination/DynamicPagination";
// import ProgressBar from "./components/ProgressBar/ProgressBar";
// import { makeTableData } from "./components/Virtualize/Custom/utils";
// import Virtualize from "./components/Virtualize/Custom/Virtualize";
// import VirtualizeWithLib from "./components/Virtualize/WithLib/VirtualizeWithLib";
// const data = makeTableData(10, 100);
function App() {
  return (
    <div className="App">
      {/* <ProgressBar />*/}
      {/* <Virtualize data={data} visibleRows={5} rowHeight={40} />*/}
      {/* <VirtualizeWithLib />*/}
      <DynamicPagination />
    </div>
  );
}

export default App;
