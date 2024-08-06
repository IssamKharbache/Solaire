import Button from "@/components/rootComponents/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-bg-main">
      <div className="bg-black opacity-60 relative">
        <Image
          src="/home/panneax.jpg"
          width={2500}
          height={1500}
          quality={80}
          alt="background image"
          className="w-full h-[calc(100vh-80px)] object-cover absolute"
        />
      </div>
      <div className="flex items-center justify-center relative ">
        <div className="flex flex-col gap-8 mt-56 mx-auto">
          <h1 className="font-bold text-8xl text-center mb-4 text-yellow-500">
            Solaire
          </h1>
          <p className="text-lg text-center w-[750px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            officia rem quaerat unde! Adipisci, soluta error? Odit fugit, fuga,
            officia corporis quaerat tenetur quia maxime nulla minus eum
            praesentium! Ipsam.
          </p>
          <Button
            label="Get started"
            cn="bg-yellow-400 hover:bg-yellow-500 mt-4 mx-auto flex items-center"
          />
        </div>
      </div>
    </main>
  );
}
