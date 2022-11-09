import React from "react";
import foto from "../assets/cg_foto.png";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#f4978e] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div>
            <img src={foto} alt="Logo" style={{ width: "50px" }} />
          </div>
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffdab9]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Ada, nice to meet you. Pleace take a look around.</p>
          </div>
          <div>
            <p>I am passionate about tech and solving problems with code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
