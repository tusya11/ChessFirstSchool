import React, { Suspense } from "react";
import { Spin } from "antd";
import { prices } from "./pages/NewPricePage/consts";

const NewPricePageLazy = React.lazy(() =>
  import("./pages/NewPricePage/NewPricePage")
);

const NewPrices = () => (
  <div>
    <Suspense fallback={<Spin />}>
      <NewPricePageLazy prices={prices} titlePt={"30px"} />
    </Suspense>
  </div>
);

export default NewPrices;
