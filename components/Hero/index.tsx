"use client";
import React from "react";
import Link from "next/link";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const Hero = () => {
  return (
    
    <div className="flex max-w-auto justify-center bg-black">
    <Carousel loop={true} autoplay={true} className="rounded-xl bg-black">
    <div className="hero justify-start min-h-screen bg-[#000000]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-[#58400f]">O.M.G ACADEMY</h1>
      <p className="py-6 text-xl font-normal">
      Film & Actors Skills Training <br /> A proudly 100% black, female-owned powerhouse <br /> dedicated to shaping the future of media talent, <br />  both in South Africa and beyond Competent in the Film & Actors Skills Training Field
      </p>
    </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl shadow-green-500/100 px-8 py-8 opacity-75">
     
    <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <Typography
              variant="small"
              className="text-left !font-semibold !text-white"
            >
             
            </Typography>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-bold !text-black"
                >
                  First Name
                </Typography>
                <Input
                  color="black"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-bold !text-black"
                >
                  Last Name
                </Typography>
                <Input
                  color="black"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-black"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-bold !text-black"
              >
                Email
              </Typography>
              <Input
                color="black"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-black"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-bold !text-black"
              >
                Message
              </Typography>
              <Textarea
                rows={6}
                color="black"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full text-xl" color="green">
              Submit
            </Button>
          </form>

    </div>
  </div>
</div>
      


</Carousel>
</div>
      
    
  );
};

export default Hero;
