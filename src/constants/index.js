export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    
    {
      title: 'Vis Effect',
      desc: 'Vis effect is pathfinder and sorting algorithms visualiser,you can visually see how algorithms like bubble sort ,quick sort ,selection sort and other work,',
      subdesc:
        'Built as a side project with react js',
      href: 'https://searching-sorting-algos.netlify.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/nodejs.png',
        },
       
      ],
    },
    
    {
      title: 'Code deck',
      desc: 'this is a online code editor where you can code in any language without setting up your enviorment everything is done automatically',
      subdesc:
        'Online web Ide',
      href: 'https://own-code-editor.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/html.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/javascript.svg',
        },
       
      ],
    },
    {
      title: 'Placemap',
      desc: 'this is restraunt finder app where you can find restraunt based on your nearest location ,you can also filter based on your regional prefrences,rating of restraunt and your distance from it',
      subdesc:
        'Restraunt finder',
      href: 'https://placemap-three.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/html.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/javascript.svg',
        },
       
      ],
    },
   
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [15, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-20, 12, 0] : [-30, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
