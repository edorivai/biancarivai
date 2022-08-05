import { Link } from "@remix-run/react";
import { ContactButton } from "~/components/contactButton";
import { Quote } from "~/components/quote";

export default function Index() {
  return (
    <>
      <div className="relative">
        <img src="IMG_2759.jpg" alt="" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-[#000] bg-opacity-25">
          <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-20">
            Entwicklung. Entfaltung. Spiritualität.
          </h1>
        </div>
      </div>
      <Quote author="Arthur Schnitzler" classes={{ quote: "text-axolotl" }}>
        Die Seele ist ein weites Land...
      </Quote>

      <ul className="flex flex-col gap-10 font-serif text-xl">
        <li>Hast du Sehnsucht nach Wachstum und Potenzialentfaltung?</li>
        <li>Möchtest du in deiner vollen Weiblichkeit leben?</li>
        <li>Oder sehnst du dich nach einem Blick über den Tellerrand?</li>
      </ul>

      <div className="flex-center">
        <ContactButton />
      </div>

      <p>
        Love,
        <br />
        Bianca
      </p>
    </>
  );
}
