import Link from "next/link";
import { Github, Twitter } from "@/components/shared/icons";

const Hero = () => {
  return (
    <div className="max-w-md sm:max-w-lg mt-20 mb-10 text-center mx-auto sm:px-0 px-2.5">
      <h1 className="text-5xl sm:text-6xl leading-tight sm:leading-tight font-display font-extrabold text-black mt-5">
        Ginetta
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ginettaGreen via-ginettaBlue to-ginettaPink">
          Link Shortener
        </span>
      </h1>
      <p className="text-gray-600 text-xl sm:text-2xl mt-5">
        based on Dub ❤️
      </p>

      <div className="mt-10 flex space-x-4 max-w-fit mx-auto">
        <Link href="https://dub.sh">
          <a className="py-2 px-5 bg-black hover:bg-white rounded-full border border-black text-sm text-white hover:text-black transition-all">
            Check out Dub
          </a>
        </Link>
        <a
          className="flex justify-center items-center space-x-2 py-2 px-5 bg-white rounded-full border border-gray-300 hover:border-gray-800 transition-all"
          href="https://github.com/steven-tey/dub"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="w-5 h-5 text-black" />
          <p className="text-sm">Star on GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
