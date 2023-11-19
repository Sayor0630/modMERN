'use client'
import React, {FC,useState} from "react"
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem,setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");

  return (
    <div>
      <Heading
      title="Medical Our Dream"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam."
      keywords="Medical, Our Dream, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam."
      />
      <Header 
      open={open}
      setOpen={setOpen}
      activeItem={activeItem}
      setRoute={setRoute}
      route={route}
      />
      <Hero />
    </div>
  );
};


export default Page;