import React from "react";

import { useDynamicPagination } from "./useDynamicPagination";

const DynamicPagination = () => {
  const photos = useDynamicPagination();
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id} className={"photo"}>
          <h2 className={"title"}>
            {photo.id}. {photo.title}
          </h2>
          <img src={photo.thumbnailUrl} alt="Image" />
        </div>
      ))}
    </div>
  );
};

export default DynamicPagination;
