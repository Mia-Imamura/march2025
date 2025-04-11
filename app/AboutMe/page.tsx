"use client";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function AboutMe() {
  let facts: string[] = [
    " Sunsets go down around 7:30pm.",
    "The color blue originated in acient Egypt around 2,200 B.C.",
    "The first Starbucks store opened in Seattle&apos;s Pike Place Market in 1971.",
    "The first day of summer is called the summer solstice",
    "Watermelon is a summer staple fruit",
    "August is the most popular birthday month (mine)",
    "Seattle was once called New York and is built atop the ruins of an ancient city",
    "Pineapple is a berry, while strawberries and raspberries are not",
    "Washington is the only state to be named after a United States president",
    "Gummy bears were originally called &apos;dancing bears&apos;",
  ];
  const [fact, setfact] = useState("");

  return (
    <>
      <div>
        <h1 className={"text-center text-4xl font-bold"}>About Me</h1>
        <Button
          className="bg-blue-900 text-white"
          onPress={() => {
            setfact(facts[Math.floor(Math.random() * facts.length)]);
          }}
        >
          Press for fact
        </Button>
        <p>{fact}</p>
        <Button
          as={Link}
          className="bg-blue-200"
          href="https://issaquah.instructure.com/courses/36871"
        >
          <Pencil />
          Click Me
        </Button>
        <h1 className="text-4xl">Mia</h1>
        <img
          alt="Me"
          height={500}
          src="https://issaquah.instructure.com/files/17016980/download?download_frd=1&verifier=znGZN1AhhXVWfUiLlG9MolPFiZpgLSrjbhCbTIbw"
          width={560}
        />
        <p>This is a photo of me and my little sister Ava</p>
        <h1 className="text-4xl">Dance</h1>
        <img
          alt="Dance"
          height={500}
          src="https://issaquah.instructure.com/files/17016987/download?download_frd=1&verifier=0SSa3KdcVF2vjH2q8kOSu57CUbJFOcB5jxRGvQWM"
          width={560}
        />
        <p>
          This photo was taken by Dakota Elizabeth, Premiere Dance Center&apos;s
          season 20 team photos.
        </p>
        <p>
          I&apos;ve danced for about 12 years and hope to continue it throughout
          high school.
        </p>
        <p>Check out Dakota Elizabeth&apos;s Website:</p>
        <Link
          className="text-blue-900 border-dotted border-3 border-blue-900 font-bold"
          href="https://www.dakotaelizabeth.com/"
        >
          Dakota Elizabeth
        </Link>
        <h1 className="text-4xl">Picture&apos;s I Found Interesting</h1>
        <img
          alt="Pictures I found Interesting"
          height={500}
          src="https://issaquah.instructure.com/files/17016973/download?download_frd=1&verifier=g9JEwPLkSmuUqo5MpOqmDdgu7941mbktScJtS8kk"
          width={560}
        />
        <img
          alt="Things I found Interesting"
          height={500}
          src="https://issaquah.instructure.com/files/17016978/download?download_frd=1&verifier=idGTa3RnYCim4JsLtNcSCur2GuS8KhkfXnBL1k18"
          width={560}
        />
        <p>
          These images were taken by me in New York (Flower shop) and Snoqualmie
          Falls (Water Fall).{" "}
        </p>
        <h1 className="text-4xl">Important to Me</h1>
        <img
          alt="Important to me"
          height={500}
          src="https://issaquah.instructure.com/files/17016994/download?download_frd=1&verifier=NjgvSsyWFk41vXkLflzEnY85QT8nLjUWplOQME61"
          width={560}
        />
        <img
          alt="Important to me"
          height={500}
          src="https://issaquah.instructure.com/files/17016976/download?download_frd=1&verifier=R7Ub0EIobXhRSx2SyJII0Bpg14xGgsunLQ3Thglu"
          width={560}
        />
        <img
          alt="Important to me"
          height={500}
          src="https://issaquah.instructure.com/files/17016963/download?download_frd=1&verifier=i7wwfdE0r4QHeO9SI8ISo8QepwcQhXAxEsTPeU4x"
          width={560}
        />
        <p>
          Family and Friends are what I find the most importnat to me in my
          life.
        </p>
        <Link
          className="text-blue-900 border-dotted border-3 border-blue-900 font-bold"
          href="https://www.premieredancecenter.com/"
        >
          Premiere Dance Center Website
        </Link>
        <h1 className="text-4xl">Facts about me</h1>
        <p>
          I take spanish 2 here at skyline and plan to continue to further my
          education in a spanish 3 class.
        </p>
        <Link
          className="text-blue-900 border-dotted border-3 border-blue-900 font-bold"
          href="https://issaquah.instructure.com/courses/37134"
        >
          Spanish
        </Link>
        {/* Link to my Spanish Module (i added the link to your spanish module -norah)*/}
        {/* <h1 className="text-4xl">Favorite Restraunts</h1> */}
        {/* <p><b>DIN TAI FUNG</b></p> */}
        {/* below, find another picture as it doesnt work - Avishi*/}
        {/* Add description and add more restaunts - Avishi */}
        {/* <img src= "https://plaza-senayan.com/wordpress/wp-content/uploads/Din-Tai-Fung-1200x900" width={560} height={500}></img> */}
        {/* <p>DIN TAI FUNG</p> */}
        {/* add a restaurant link and photo */}
        {/* add a heading for the restaurant and photo - norah */}
      </div>
    </>
  );
}
