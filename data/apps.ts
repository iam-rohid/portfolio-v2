import { AppType } from "../types";

const apps: AppType[] = [
  {
    id: "1",
    title: "Code Converter",
    description:
      "A code converter app. This is a very useful app if you work with SVG's and React. You can easily convert SVG to JSX or TSX or React Native component, HTML to JSX, JSON to TypeScript Type. More functionality will be coming soon.",
    coverImage: {
      url: "/images/thumbnails/code-converter-thumbnail.png",
    },
    href: "https://codeconverter.rohidulislam.com/",
    targetBlank: true,
  },
  {
    id: "2",
    title: "ColorPkr",
    description:
      "A color picker app but not just a picker app :). You can pick color edit color, you will get all the available color formats, it provides shades, tints, tones, hues for your color. It also provides color harmonies like Analogous, Complementary, Double Split Complementary, Rectangle, Split Complementary, Tetradic and Triadic. It also provides a Tailwind CSS Color palette for your color.",
    coverImage: {
      url: "/images/thumbnails/colorpkr-thumbnail.png",
    },
    href: "https://colorpkr.rohidulislam.com",
    targetBlank: true,
  },
];

export default apps;
