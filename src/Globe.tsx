import React from "react";
import { Viewer } from "resium";

import "./Globe.css";

const dummyCreditDiv = document.createElement("div");

export const Globe: React.FC = ({ children }) => {
  let globeViewer = (
    <Viewer
      animation={false}
      baseLayerPicker={false}
      fullscreenButton={false}
      vrButton={false}
      geocoder={false}
      homeButton={false}
      infoBox={false}
      sceneModePicker={false}
      timeline={false}
      navigationHelpButton={false}
      navigationInstructionsInitiallyVisible={false}
      scene3DOnly={false}
      imageryProvider={false}
      showRenderLoopErrors={true}
      creditContainer={dummyCreditDiv}
      creditViewport={dummyCreditDiv}
      style={{ flexGrow: 2 }}
    >
      {children}
    </Viewer>
  );

  return globeViewer;
};

export default Globe;
