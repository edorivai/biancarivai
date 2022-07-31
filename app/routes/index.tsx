import { Link } from "@remix-run/react";

// can we deploy?
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
      <p>
        Möchtest du in Verbindung mit dir und anderen Leben? Hast du Sehnsucht
        nach Wachstum und Potenzialentfaltung? Möchtest du in deiner vollen
        Weiblichkeit leben? Oder sehnst du dich nach einem Blick über den
        Tellerrand?
      </p>

      <p>
        <Link
          className="bg-olive text-white px-[17px] py-[9px] rounded-lg text-[16px] uppercase font-medium tracking-[1px] inline-block my-[50px]"
          to="/kontakt"
        >
          ⋗ Walk with me
        </Link>
      </p>

      <p>
        Love,
        <br />
        Bianca
      </p>
    </>
  );
}
