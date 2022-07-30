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

export const links: LinksFunction = () => {
  return [
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
      href: "https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&family=Raleway:wght@300;500&display=swap",
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
        <article className="flex flex-col h-full">
          <Nav />
          <img
            src="IMG_2759.jpg"
            className="object-cover object-center h-[50vh]"
            alt=""
          />

          <section className="grow flex flex-col items-center">
            <main className="max-w-screen-lg py-6 px-4 sm:py-[50px] sm:px-[100px]">
              <Outlet />
              <Footer />
            </main>
          </section>
        </article>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
