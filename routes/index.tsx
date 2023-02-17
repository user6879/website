import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>user6879 - Website</title>
        <meta name="description" content="15 years old developer from Russia" />
        <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-max">
            <img
              src="/avatar.png"
              class="w-52 h-52 rounded-full m-2 border-2 border-gray-800"
              alt="Avatar"
            />

            <div className="flex flex-col text-center flex-wrap items-center justify-center p-2 h-full">
              <h1 className="text-3xl">
                Hi there!
              </h1>

              <p>
                I'm user6879 a.k.a. akumaru.
                <br />
                I'm 17 y.o. coder from Uzbekistan.
                <br />
                Currently learning TypeScript for web development.
              </p>
            </div>
            <a className="my-3" href="https://github.com/user6879">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}
