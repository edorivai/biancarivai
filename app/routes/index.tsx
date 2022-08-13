import { ActionArgs, fetch, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import { ContactButton } from "~/components/contactButton";
import { NewsletterBar, validator } from "~/components/newsletter";
import { Quote } from "~/components/quote";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const data = await validator.validate(body);
  if (data.error) return validationError(data.error);

  const formUrl =
    "https://1eb55f05.sibforms.com/serve/MUIEAOU14JftcpWqeoTgSihMBF11nsL9LXSVQUAFO-pdMUa2zrarLqdGADHREIrz8ScxeaBQ724i47Yzo5Rvr56gWeDLKmeiiKu-7W7kO7cbY-46IpW6YmMCx0OF3iKFh_dq-odtlE34OD9FNFmP16_q6ZRcnTfqRJ5BAXs-Zocq832LC1KbT-nviph4km9tIz2Qke8Weav-7CTY";
  await fetch(formUrl, { method: "POST", body }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  });
  return json({ success: true });
}

export type ActionType = Awaited<ReturnType<typeof action>>;

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
      <NewsletterBar />
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
