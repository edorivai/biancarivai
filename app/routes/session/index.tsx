import { MoonIcon } from "@heroicons/react/outline";
import { PopupButton } from "react-calendly";
import { Quote } from "~/components/quote";

/*
„Hart in der Sache, aber weich von Mensch zu Mensch.“

🌬 Bist du auf der Suche nach Veränderung in deinem Leben?
🌬 Fühlst du dich ausgepowert und kannst kaum noch schlafen?
🌬 Stehst du vor wichtigen Entscheidungsfragen?
🌬 Suchst du nach Konfliktlösungen?
🌬 Vermisst du den Sparkle in deinem Leben der alles lebendiger macht?

Ich helfe dir dabei, genau diese Antworten in  DIR zu finden.

In den 1:1 Sessions kannst du folgendes erwarten:

🌙 Mentales Wachstum
🌙 Kreative Problemlösung
🌙 Seelische Entspannung bei belastenden Themen
🌙 Werkzeuge für den Alltag
🌙 Eigene Muster erkennen und durchbrechen
*/

export default function About() {
  return (
    <article className="flex gap-x-4 gap-y-20 flex-col sm:flex-row">
      <section>
        <h1 className="mt-0">1:1 Session</h1>
        <Quote>Hart in der Sache, aber weich von Mensch zu Mensch.</Quote>
        <p className="text-lg">
          🌬 Bist du auf der Suche nach Veränderung in deinem Leben?
        </p>
        <p className="text-lg">
          🌬 Fühlst du dich ausgepowert und kannst kaum noch schlafen?
        </p>
        <p className="text-lg">
          🌬 Stehst du vor wichtigen Entscheidungsfragen?
        </p>
        <p className="text-lg">🌬 Suchst du nach Konfliktlösungen?</p>
        <p className="text-lg">
          🌬 Vermisst du den Sparkle in deinem Leben der alles lebendiger macht?
        </p>
        <h2>In den 1:1 Sessions kannst du folgendes erwarten</h2>
        <ul className="text-lg flex flex-col gap-3">
          {/* 🌙 */}
          <li>
            <MoonIcon className="w-4 translate-y-[-2px] inline-block" />{" "}
            Mentales Wachstum
          </li>
          <li>
            <MoonIcon className="w-4 translate-y-[-2px] inline-block" />{" "}
            Kreative Problemlösung
          </li>
          <li>
            <MoonIcon className="w-4 translate-y-[-2px] inline-block" />{" "}
            Seelische Entspannung bei belastenden Themen
          </li>
          <li>
            <MoonIcon className="w-4 translate-y-[-2px] inline-block" />{" "}
            Werkzeuge für den Alltag
          </li>
          <li>
            <MoonIcon className="w-4 translate-y-[-2px] inline-block" /> Eigene
            Muster erkennen und durchbrechen
          </li>
        </ul>

        {typeof window !== "undefined" && (
          <PopupButton
            className="font-oswald bg-axolotl text-white px-20 py-[9px] text-[20px] font-bold tracking-[1px] block my-[50px] mx-auto"
            url="https://calendly.com/contact-7110"
            text="⋗ Walk with me"
            rootElement={document.body}
          />
        )}
      </section>
    </article>
  );
}
