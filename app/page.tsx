import Image from "next/image";
import SkillCard from "./components/skill_card/skillcard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify-between  w-[75vw] gap-4 sm:flex-row">
          <div className="w-[55%] flex flex-col gap-5 items-center justify-center sm:items-start">
            <h1 className="text-4xl font-bold text-center sm:text-left font-[family-name:var(--font-geist-mono)]">Hi, I&apos;m Venkatesh</h1>
            <p className="text-md text-center sm:text-left font-[family-name:var(--font-geist-mono)]">a software engineer and science enthusiast. I focus on creating practical, efficient software solutions 
            that solve real-life problems. Driven by curiosity and a love for technology, I aim to build tools that 
            are both thoughtful and impactful.</p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Resume
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="about-me"
    
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </div>
          </div>
            <Image
              className="w-[45%] invert dark:invert-0"
              src="/landing.gif"
              alt="an animated gif"
              width={180}
              height={38}
              priority
            />
        </div>
        <div>
        <div className=" w-[75vw]">
          <h1 className="text-2xl font-bold text-center font-[family-name:var(--font-geist-mono)] mb-13">Software Development Technologies</h1>         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SkillCard category="Front-end Technologies" technologies={['React.js', 'Next.js', 'Tailwind CSS', 'Redux']}/>
            <SkillCard category="Back-end Technologies" technologies={['Node.js', 'Express.js']}/>
            <SkillCard category="Databases" technologies={['SQL']}/>
            <SkillCard category="Programming Languages" technologies={['JavaScript', 'Python']}/>
            <SkillCard category="Other Technologies" technologies={['Oracle OIC', 'Oracle SOA Suite']}/>
          </div>
        </div>
        </div>
        {/* <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol> */}


        

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/venkatesh-valaboju/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://leetcode.com/u/vnky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Leetcode
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/VenkateshValaboju"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github →
        </a>
      </footer>
    </div>
  );
}
