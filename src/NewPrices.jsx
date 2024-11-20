import React, { Suspense } from "react";
import { Spin } from "antd";
import { new_prices } from "./pages/NewPricePage/consts";

const NewPricePageLazy = React.lazy(() =>
  import("./pages/NewPricePage/NewPricePage")
);

const NewPrices = () => (
  <div>
    <Suspense fallback={<Spin />}>
      <NewPricePageLazy
        hideElements={true}
        prices={new_prices}
        titlePt={"30px"}
      />
    </Suspense>
  </div>
);

export default NewPrices;
