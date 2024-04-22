import projectOne from "../assets/project-1.JPG";
import projectTwo from "../assets/project-2.JPG";
import projectThree from "../assets/project-3.jpg";
import projectFour from "../assets/project-4.jpg";
import projectFive from "../assets/project-5.jpg";


const projects = {
  1: {
    title: "Nova AI",
    image: projectOne,
    description: (
      <>
        <p>
        With the help of open ai i was able to use an api key for a version of chatgpt 3.5 to make an Ai assistant, I was even able to make it sound Nigerian with the help of the second level domain “com.ng”.
        </p>
      </>
    ),
    Google: "https://docs.google.com/presentation/d/1-cuUuNIe8Ge99XIOsIx4R0YzJYBVAgCN59vBEZTGwvM/edit?usp=sharing",
    demo: "https://docs.google.com/presentation/d/1-cuUuNIe8Ge99XIOsIx4R0YzJYBVAgCN59vBEZTGwvM/edit?usp=sharing",
  },
  2: {
    title: "Motion Sensor Security Camara",
    image: projectTwo,
    description: (
      <>
        <p>
        While in undergrad me and my classmates were able to build an alarm system with the use of a raspberry pi and a pir motion sensor. We were able to use the raspberry pi to record and capture footage of anyone who walked by the pir motion sensor.
        </p>
      </>
    ),
    Google: "https://docs.google.com/presentation/d/1eHCc_mF5bBNzwgYEciCcS5qosJrQ36CQOVPRAY78qdo/edit?usp=sharing",
    demo: "https://docs.google.com/presentation/d/1eHCc_mF5bBNzwgYEciCcS5qosJrQ36CQOVPRAY78qdo/edit?usp=sharing",
  },
  3: {
    title: "Door lock ",
    image: projectThree,
    description: (
      <>
        <p>
        With the help of my fellow classmates in undergrad I was able to make a 4-digit programmable lock. We accomplished this by using an arduino, solidworks and an Ender 3 3d printer..
        </p>
      </>
    ),
    Google: "https://docs.google.com/presentation/d/18-ovSyGvz4Li7vz3OiBS4GWRnBhN82tLLA-YF3ubIC0/edit?usp=sharing",
    demo: "https://docs.google.com/presentation/d/18-ovSyGvz4Li7vz3OiBS4GWRnBhN82tLLA-YF3ubIC0/edit?usp=sharing",

  },

  4: {
    title: "3D Prints",
    image: projectFour,
    description: (
      <>
        <p>
          Some of the things I have been able to print at home with my Ender-3 printer.
        </p>
      </>
    ),
  },
  5 : {
    title: "Nova",
    image: projectFive,
    description: (
      <>
        <p>
        Nova is the brain child of my two passions, 3-D printing and software Engineering. 
        </p>
      </>
    ),
    Google: "https://docs.google.com/presentation/d/1FMCs7ui83y8MotPI2MmwshtQYL-Q07Gw7HluLLxoZKs/edit?usp=sharing",
    demo: "https://docs.google.com/presentation/d/1FMCs7ui83y8MotPI2MmwshtQYL-Q07Gw7HluLLxoZKs/edit?usp=sharing",

  },
};

export default projects;