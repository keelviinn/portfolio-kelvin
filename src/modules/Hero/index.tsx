import { NextComponentType } from "next";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { ExternalLink } from "../../components/ExternalLink";

export const Hero: NextComponentType = () => {
  return (
    <section aria-labelledby="hero" id="hero" className="mt-24 w-full">
      <div className="py-12 flex flex-col items-end max-w-screen-xl px-6 mx-auto">
        <p className="md:text-2xl text-lg leading-8 mb-4 md:mb-8">
          <span className="text-cyan-500">Hi, my name is</span>
        </p>
        <h1 className="md:text-5xl text-3xl dark:text-gray-200 text-gray-400 mb-4 md:mb-8 font-bold">
          Kelvin Henrique
        </h1>
        <h2 className="md:text-5xl text-2xl dark:text-gray-300 text-gray-500 mb-4 md:mb-8 font-bold">
          Let&apos;s build the future 🔨
        </h2>

        <p className="max-w-xl text-right text-base dark:text-gray-400 text-gray-600 font-bold mb-4 md:mb-8">
          I&apos;m a software engineer specializing in javascript and typescript
          languages and providing exceptional digital experiences. Currently,
          I&apos;m focused on building web applications at{" "}
          <ExternalLink href="https://clusterstack.io/en">
            ClusterStack
          </ExternalLink>
          .
        </p>

        <div className="flex flex-row items-center justify-end gap-2">
          <a
            href="https://www.linkedin.com/in/khenriqqe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin
              size={32}
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500"
            />
          </a>
          <a
            href="https://github.com/keelviinn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub
              size={32}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
