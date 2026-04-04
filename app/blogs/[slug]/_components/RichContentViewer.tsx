"use client";

import { RicosViewer, quickStartViewerPlugins } from "@wix/ricos";
import "@wix/ricos/css/all-plugins-viewer.css";

const plugins = quickStartViewerPlugins();

export const RichContentViewer = ({ content }) => {
  return <RicosViewer content={content} plugins={plugins} />;
};

export default RichContentViewer;
