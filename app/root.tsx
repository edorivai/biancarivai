import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/footer";
import { Nav } from "./components/navigation";
import styles from "./styles/app.css";

const fontFamilies = [
  { family: "Raleway", weights: ["0,300", "0,500"] },
  // { family: "Cormorant SC", weights: [300, 500] },
  // { family: "Lora", weights: [400, 500] },
  { family: "Playfair Display", weights: ["0,400", "0,600", "1,400"] },
  // { family: "Taviraj", weights: [300, 500] },
]
  .map(
    (f) =>
      `family=${f.family.replace(/ /g, "+")}:ital,wght@${f.weights.join(";")}`
  )
  .join("&");

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg",
    },
    { rel: "stylesheet", href: styles },
    // Google Webfonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css2?${fontFamilies}&display=swap`,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bianca Rivai",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <main className="flex flex-col m-auto max-w-screen-xl py-6 px-4 sm:px-[100px]">
          <Outlet />
          <Footer />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
