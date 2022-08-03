import { Link } from "@remix-run/react";
import { ContactButton } from "~/components/contactButton";

export default function About() {
  return (
    <div className="flex gap-x-4 gap-y-20 flex-col sm:flex-row">
      <section>
        <h1 className="mt-0">Wer ich bin</h1>
        <p>
          Ich bin ein kreativer Kopf mit einer starken Verbindung zu meinen
          Gefühlen. Ich bin Mutter und Liebende. Ich bin direkt und feinspürig.
        </p>
        <p>
          Ich bin angehende Psychotherapeutin und lass mich von allem, was
          meinen Werten und Überzeugungen zusagt, inspirieren.
        </p>
        <h1>Wo ich hingehe</h1>
        <p>
          Die Welt erlebt große Umbrüche und ich merke, wie Menschen durch Angst
          und Unsicherheit den Zugang zu ihrer Seele verlieren. Ich begleite den
          Menschen auf der Reise zu sich selbst, mit dem Ziel zurück zum Kern zu
          gelangen um aus dem heraus in vollster Eigenverantwortung sein eigenes
          Leben facettenreich zu gestalten.
        </p>
        <p>
          Meine Arbeit geht in die Tiefe. Wir setzen da an wo es am dringendsten
          gebraucht wird.
        </p>
        <h1>An was ich glaube</h1>
        <ul className="list-disc pl-4">
          <li>
            Gefühle sind in jedem von uns manche haben einfach nur den Zugang zu
            Ihnen verloren.
          </li>
          <li>
            Wir können nicht ändern was war aber wir können lenken was jetzt
            gerade sein soll.
          </li>
          <li>Die Kraft des eigenen Willens</li>
          <li>
            Wir übernehmen Eigenverantwortung für uns und unser Leben und es ist
            nicht weg deligierbar.
          </li>
          <li>Wir dürfen und müssen Grenzen setzen.</li>
          <li>Wir sind alle miteinander verbunden.</li>
          <li>
            Wir sind nicht geschaffen für Einsamkeit, wir brauchen ein soziales
            Netz.
          </li>
          <li>
            Jeder hat seine eigene Wirklichkeitskonstruktion, diese gilt es zu
            respektieren und im Besten Fall zu akzeptieren.
          </li>
          <li>
            Jeder von uns hat Spiritualität in sich.. so wie bei den Gefühlen
            haben manche nur eben den Zugang zu Ihr verloren.
          </li>
          <li>
            Verantwortung für sein Leben zu übernehmen heißt auch nicht immer zu
            wissen was hinter der nächsten Ecke wartet.
          </li>
        </ul>

        <h1>Interessiert?</h1>
        <p>
          <ContactButton />
        </p>
      </section>
      <div className="shrink-0 sm:w-1/2">
        <img src="IMG_2750.jpg" alt="" />
      </div>
    </div>
  );
}
