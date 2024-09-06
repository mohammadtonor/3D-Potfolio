import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  booking,
  food,
  ecommerce,
  airbnb,
  multivendor,
  sass,
  exilexlegal,
  pomechain,
  eduoco

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

 

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Eduoco B.V.",
    icon: eduoco,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - jul 2022",
    points: [
      "Developing and maintaining full-stack web applications using Laravel and React, ensuring performance and scalability",
      "Collaborating with designers, product managers, and developers to deliver high-quality, responsive, and cross-browser compatible solutions",
      "Implementing RESTful APIs and backend services in Laravel, integrating seamlessly with React for a dynamic user experience.",
      "Participating in code reviews and optimizing both frontend and backend code, ensuring adherence to coding standards and best practices",
    ],
  },
  
  
  {
    title: "MERN stack Developer",
    company_name: "Exilex Legal",
    icon: exilexlegal,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Developing and maintaining full-stack applications using the MERN stack for high performance and scalability.",
      "Collaborating with cross-functional teams to create responsive, user-friendly, and cross-browser compatible applications.",
      "Implementing RESTful APIs with Node.js and Express.js, seamlessly integrating with React for dynamic frontends.",
      "Conducting code reviews and optimizing MongoDB queries, ensuring adherence to best practices across the stack.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 -Present",
    points: [
      "Developing high-performance mobile apps using React Native for both iOS and Android.",
      "Collaborating with teams to create responsive, cross-platform applications.",
      "Integrating third-party APIs and native modules for enhanced functionality.",
      "Conducting code reviews and optimizing performance while following best practices.",
          ],
  },
  {
    title: "Full stack Developer",
    company_name: "POMECHAIN",
    icon: pomechain,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining full-stack applications using Next.js, Prisma, and Tailwind CSS for performance and scalability.",
      "Collaborating with cross-functional teams to create responsive, user-friendly, and visually appealing applications with Tailwind CSS.",
      "Integrating and managing Stripe payments seamlessly within the Next.js and Prisma stack for secure and efficient transactions.",
      "Conducting code reviews, optimizing Prisma queries, and ensuring best practices in both frontend and backend development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Majed Karim",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Amir Gholam",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Farooq Soltan",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const projects = [
  {
    name: "Agency Management",
    description:
      "Introducing our powerful Multivendor SaaS platform designed to revolutionize your business operations. This comprehensive solution offers a suite of features to enhance.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: sass,
    source_code_link: "https://github.com/mohammadtonor/saass-website-builder.git",
  },
  {
    name: "Multi Vendor Ecommerce",
    description:
      "This platform enables multiple sellers to manage their own stores, list products, and process orders independently. Features include user authentication, real-time notifications, dynamic product search.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: multivendor,
    source_code_link: "https://github.com/mohammadtonor/Laravel10_Multi_vendor_Ecommerce.git",
  },
  {
    name: "Properties Booking",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/mohammadtonor/airbnb-clone",
  },
  {
    name: "Ecommerce",
    description:
      "The app features a dynamic and responsive user interface, secure user authentication, product listings, shopping cart functionality, and an efficient checkout process.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/mohammadtonor/Ecommerce.git",
  },
  
    {
    name: "Hotel Reservation",
    description:
      " I developed an online booking platform like Booking.com. The platform enables users to search for and book accommodations also managing hotels and user accounts.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/mohammadtonor/mearn-booking-app.git",
  },
  {
    name: "Food Ordering",
    description:
      " food ordering style of apps with next.js 14. By ordering food with additional item like many kind of pizza and other fast food, Cart functionality and payment with stripe  .",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/mohammadtonor/food-ordering-app.git",
  },
    
];

export { services, technologies, experiences, testimonials, projects };