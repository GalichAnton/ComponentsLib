import "./App.css";
// import DynamicPagination from "./components/DynamicPagination/DynamicPagination";
import { ChangeEvent, useState } from "react";

import black from "./assets/black.jpg";
import red from "./assets/red.jpg";
import Gallery from "./components/Gallery/Gallery";
import { IReview } from "./components/Gallery/Gallery.props";
import { useDebounce } from "./hooks/DebounceThrottle/useDebounce";
import { useThrottle } from "./hooks/DebounceThrottle/useThrottle";
import { useLocalStorageState } from "./hooks/Storage/useLocalStorageState";
// import SplitWrapper from "./components/SplitImage/SplitWrapper";
// import ProgressBar from "./components/ProgressBar/ProgressBar";
// import { makeTableData } from "./components/Virtualize/Custom/utils";
// import Virtualize from "./components/Virtualize/Custom/Virtualize";
// import VirtualizeWithLib from "./components/Virtualize/WithLib/VirtualizeWithLib";
// const data = makeTableData(10, 100);
const reviews: IReview[] = [
  {
    name: "Nastya",
    job: "HeadMaster",
    image: black,
    text: "Lorem ipsum",
    id: 1,
  },
  {
    name: "Ruslan",
    job: "Engineer",
    image: red,
    text: "Lorem ipsum dolores",
    id: 2,
  },
];
function App() {
  const [value, setValue] = useState("hey");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    debounceHandle(value);
  };
  const debounceHandle = useThrottle(() => {
    console.log("hi", value);
  }, 2500);
  return (
    <div className="App">
      {/* <ProgressBar />*/}
      {/* <Virtualize data={data} visibleRows={5} rowHeight={40} />*/}
      {/* <VirtualizeWithLib />*/}
      {/* <DynamicPagination />*/}
      {/* <SplitWrapper />*/}
      {/* <Gallery reviews={reviews} />*/}
      <input value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default App;
