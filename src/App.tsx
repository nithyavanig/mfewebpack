import React, { Suspense } from "react";
import "./app.css";
const App1 = React.lazy(() => import("header/App"));
// const App2 = React.lazy(() => import("footer/App"));

export const App = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <div className="app-wrapper">
        <div className="host-header">
          Header
          <Suspense fallback={<div>Loading App1...</div>}>
            <App1 />
          </Suspense>
        </div>
        <div className="app-prod-overview">
          <div className="host-product">Product</div>
          <div className="host-overview">Overview</div>
        </div>
        <div className="host-footer">
          Footer
          {/*<Suspense fallback={<div>Loading App2...</div>}>
        <App2 />
      </Suspense> */}
        </div>
      </div>
    </div>
  );
};
