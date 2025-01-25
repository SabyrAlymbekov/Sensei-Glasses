import React from "react"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const MainContent = () => {
    return (
      <div className="container h-[calc(100vh-60px)] realtive flex flex-col items-center justify-center">
          {/*<Image*/}
          {/*  src="/assets/images/bgc-dots.svg"*/}
          {/*  width={400}*/}
          {/*  height={400}*/}
          {/*  alt="bgc-dots image"*/}
          {/*  className="absolute object-cover object-center w-full h-full top-0 left-0 z-[-1] opacity-50"*/}
          {/*/>*/}
          <div className="flex justify-center items-center flex-col mt-10 mb-14">
              <div className="relative w-full px-16 py-16 my-2 max-lg:px-10">
                  <Image src="/assets/images/radialbg2.jpg" alt="home page image" width={848} height={477}
                         className="absolute top-0 left-0 w-full h-full object-cover backdrop-blur-xl rounded-lg"/>
                  <Image src="/assets/images/radialbg2.jpg" alt="home page image" width={848} height={477}
                         className="absolute top-0 left-0 w-full h-full object-cover blur-2xl rounded-lg"/>
                  <div className="rounded-lg flex flex-col gap-3 overflow-hidden relative">
                      <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-montserrat-bold uppercase text-white z-2">
                          {/* приложение для поддержки людей с ограниченными возможностями */}
                          SmartAI-glasses for blind and visually impaired people
                      </h1>
                      <p className="text-2xl mb-6  text-white z-2">
                          {/* Уникальное приложение и технологически продвинутые очки, помогающие слепым и слабовидящим ориентироваться в пространстве и чувствовать себя в безопасности. */}
                          Unique application and technologically advanced glasses, helping the blind and visually
                          impaired to navigate and feel safe.
                      </p>
                      <div className="flex justify-center items-center gap-2 z-2 flex-wrap">
                          <Button variant="default" className=" text-lg px-8 py-6">
                              <Link href="/order" className="font-bold">Watch Demo</Link>
                          </Button>
                          <Button variant="outline"
                                  className=" text-lg px-8 py-6 bg-transparent border-[2px] text-white rounded-full">
                              <Link href="/order" className="font-bold">Pre order</Link>
                          </Button>
                      </div>
                  </div>
              </div>
              {/*<Image*/}
              {/*        src="/assets/images/metaglasses.jpg"*/}
              {/*        alt="Инновационные очки для людей с нарушениями зрения"*/}
              {/*        width={500}*/}
              {/*        height={300}*/}
              {/*        className="w-full h-auto rounded-lg max-w-[500px] m-auto"*/}
              {/*    />*/}

          </div>
          <Image
            src="/assets/images/Scribble.svg"
            alt="home page image"
            width={150}
            height={150}
            className="absolute bottom-[-75px] z-10"
          />
      </div>
    )
}

export default MainContent