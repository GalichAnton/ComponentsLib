import { useEffect, useState } from "react";

import axios from "axios";

export const useDynamicPagination = () => {
  const [items, setItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const scrollHandler = (e: Event) => {
    const target = e.currentTarget as HTMLDocument;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      items.length < totalCount
    ) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
      )
      .then((res) => {
        setItems([...items, ...res.data]);
        setCurrentPage((prev) => prev + 1);
        setTotalCount(Number(res.headers["x-total-count"]));
      })
      .finally(() => setFetching(false));
  }, [fetching]);
  return items;
};
