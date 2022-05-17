import React, { FC, useEffect, useRef } from "react";
import "./virtualize.css";
interface IVirtualize {
  data: any;
  rowHeight: number;
  visibleRows: number;
}

const Virtualize: FC<IVirtualize> = ({ data, visibleRows, rowHeight }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = React.useState(0);

  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }
  useEffect(() => {
    function onScroll(e: Event) {
      const event = e.target as HTMLElement;
      setStart(
        Math.min(
          data.length - visibleRows - 1,
          Math.floor(event.scrollTop / rowHeight)
        )
      );
    }
    rootRef.current?.addEventListener("scroll", onScroll);

    return () => {
      rootRef.current?.removeEventListener("scroll", onScroll);
    };
  }, [data.length, visibleRows, rowHeight]);
  return (
    <div
      style={{
        height: rowHeight * visibleRows + 1,
        overflow: "auto",
      }}
      ref={rootRef}
    >
      <div style={{ height: getTopHeight() }} />
      <table>
        <tbody>
          {data
            .slice(start, start + visibleRows + 1)
            .map((row: any, rowIndex: any) => (
              <tr style={{ height: rowHeight }} key={start + rowIndex}>
                {row.map((text: any, colIndex: any) => (
                  <td key={start + "" + rowIndex + colIndex}>{text}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }} />
    </div>
  );
};

export default Virtualize;
