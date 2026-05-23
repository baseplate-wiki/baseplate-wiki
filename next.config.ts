import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const with_mdx = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
};

export default with_mdx(nextConfig);