import { MoonIcon } from "@heroicons/react/outline";
import { ContactButton } from "~/components/contactButton";
import { Quote } from "~/components/quote";

export default function About() {
  return (
    <article className="flex gap-x-4 gap-y-20 flex-col sm:flex-row">
      <section>
        <h1 className="mt-0">1:1 Session</h1>
        <Quote>Hart in der Sache, aber weich von Mensch zu Mensch.</Quote>
        <p className="text-lg">
          Wenn du auf der Suche bist nach Veränderung in deinem Leben oder
          Umstrukturierung dann bist du hier richtig.
        </p>
        <p className="text-lg">Ich helfe dir dabei. </p>
        <h3 className="text-2xl text-text">
          In den 1:1 Sessions kannst du folgendes erwarten:
        </h3>
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
        </ul>

        <h1>Interessiert?</h1>
        <p>
          <ContactButton />
        </p>
      </section>
    </article>
  );
}
