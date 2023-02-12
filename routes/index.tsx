import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
    <Head>
      <title>user6879 Website</title>
    </Head>
    <div className="justify-items-center items-center bg-black font-mono  text-white h-screen flex flex-col justify-between text-center">
        <div class="">
          <h1 className="text-5xl py-6 ">
            user6879
          </h1>
          <h2 className="text-3xl">
            About me.
          </h2>
          <div>
            <p className="bg-black-200 text-2xl justify-self-auto px-96 py-6 mx-10 flex">
              Hi there. I'm 17 y.o. TypeScript coder from Uzbekistan.
              Currently learning TypeScript for Web development.
              You can find my projects on my Github page.
            </p>
          </div>
        </div>
        <Footer></Footer>
    </div>
    
    </>
  );
}
