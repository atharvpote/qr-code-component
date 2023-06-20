import { JSX } from "react";
import Image from "next/image";
import QRCode from "../public/image-qr-code.png";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen place-content-center place-items-center bg-lightGray">
      <section className="m-4 w-full max-w-xs rounded-3xl bg-white p-4">
        <Image
          src={QRCode}
          alt="QR Code"
          className="overflow-hidden rounded-xl"
        />
        <div className="p-4">
          <h1 className="my-4 text-center text-title font-bold leading-7">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-base font-normal text-grayishBlue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to next level
          </p>
        </div>
      </section>
    </main>
  );
}
