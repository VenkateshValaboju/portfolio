import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="flex flex-col justify-between  w-[75vw] gap-4 sm:flex-row">
            <div className="w-[55%] flex flex-col gap-5 items-center justify-center sm:items-start">
                <h1 className="text-4xl font-bold text-center sm:text-left font-[family-name:var(--font-geist-mono)]">About Me</h1>
                <p className="text-md text-center sm:text-left font-[family-name:var(--font-geist-mono)]">My name is <span className="text-lg font-bold">Venkatesh Valaboju</span>, I&apos;m currently working at Accenture as a software developer. 
                I have a total experience of 1.5 years in software developement. I have graduated from <span className="font-bold">Indian Institute of Space Science and Technology</span>, Thiruvananthapuram with a Bachelor&apos;s Degree in 
                <span className="font-bold"> Electronics and Communications Engineering (Avionics)</span></p>
            </div>
            <div>
                <Image
                    className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-3xl width-[20%]"
                    src="/profile_picture.jpg"
                    alt="Venkatesh Valaboju"
                    width={350}
                    height={350}
                    priority
                />
            </div>
            </div>
        </main>
        </div>
    );
    }