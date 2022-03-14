import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowMovies from "./ContentRowMovies";

function ContentWrapper() {
  return (
    <React.Fragment>
      <ContentRowMovies />
      <ContentRowCenter />
    </React.Fragment>
  );
}
export default ContentWrapper;
