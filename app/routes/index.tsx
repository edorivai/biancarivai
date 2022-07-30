export default function Index() {
  return (
    <article className="flex flex-col sm:flex-row h-full">
      <img
        src="avatar.jpg"
        className="object-cover object-center w-full sm:w-auto sm:max-w-xl shrink-0"
        // className="object-cover object-center w-full sm:w-1/2 shrink-0"
        alt=""
      />
      <section className="grow py-6 px-4 sm:py-[150px] sm:px-[100px]">
        <main>
          <h2 className="text-persian text-xs font-medium uppercase tracking-[2px]">
            Bianca Rivai
          </h2>
          <h1 className="text-axolotl font-serif text-[48px] my-4 font-bold leading-tight">
            Entwicklung. Entfaltung. Spiritualität.
          </h1>
          <p>
            Möchtest du in Verbindung mit dir und anderen Leben? Hast du
            Sehnsucht nach Wachstum und Potenzialentfaltung? Möchtest du in
            deiner vollen Weiblichkeit leben? Oder sehnst du dich nach einem
            Blick über den Tellerrand?
          </p>

          <p>
            <a
              className="bg-olive text-white px-[17px] py-[9px] rounded-lg text-[16px] uppercase font-medium tracking-[1px] inline-block my-[50px]"
              href="mailto:contact@biancarivai.com"
              target="_blank"
              rel="noreferrer"
            >
              ⋗ Tell me all about it
            </a>
          </p>

          <p>
            Love,
            <br />
            Bianca
          </p>
        </main>
        <footer className="mt-16 text-sm">
          <nav>
            <h4 className="tracking-[1px] font-extralight text-xs opacity-70 uppercase">
              Connect
            </h4>
            <ul className="flex items-center gap-6 mt-3">
              <li className="opacity-70">
                <a
                  href="mailto:contact@biancarivai.com"
                  className="flex items-center gap-1"
                >
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"
                    />
                  </svg>
                  contact@biancarivai.com
                </a>
              </li>
              <li className="opacity-70">
                <a
                  href="https://www.instagram.com/bianca.rivai/"
                  className="flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                  bianca.rivai
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </section>
    </article>
  );
}
