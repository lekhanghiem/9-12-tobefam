interface SubMenuItem {
  id: number;
  name: string;
  des: string;
  link: string;
}

interface MenuItem {
  id: number;
  name: string;
  isSubMenu: boolean;
  subMenu: SubMenuItem[];
}

export const navMenu: MenuItem[] = [
  {
    id: 102,
    name: "Learn",
    isSubMenu: true,
    subMenu: [
      {
        id: 102.1,
        name: "Blockchain Q&A",
        des: "A Basic Guide to Understanding the Fundamentals",
        link: "/now-blockchain",
      },
      {
        id: 102.2,
        name: "PoM",
        des: "Revolutionizing Blockchain Consensus with Proof of Mobile (PoM): A Deep Dive into  NOW Blockchain's Innovative Approach",
        link: "/pom",
      },
    ],
  },
  {
    id: 103,
    name: "Build",
    isSubMenu: true,
    subMenu: [
      {
        id: 103.1,
        name: "Dev Learning Center",
        des: "Start learning how to build today .",
        link: "/dev-learning",
      },
      {
        id: 103.2,
        name: "Whitepaper",
        des: "",
        link: "https://nowblockchain.io/whitepaper.pdf",
      },

      {
        id: 1032.2,
        name: "Documentation",
        des: "Kickstart your crypto journey .",
        link: "https://docs.nowblockchain.io/",
      },
      {
        id: 103.3,
        name: "Hackathon",
        des: "Kickstart your crypto journey .",
        link: "/hackathon",
      },
    ],
  },
  {
    id: 104,
    name: "Solutions",
    isSubMenu: true,
    subMenu: [
      {
        id: 104.1,
        name: "Enterprise",
        des: "",
        link: "/enterprise",
      },
      {
        id: 104.2,
        name: "Payments and Commerce",
        des: "",
        link: "/payments-and-commerce",
      },
      {
        id: 104.3,
        name: "Artists and Creators",
        des: "",
        link: "/artists-and-creators",
      },
      {
        id: 104.4,
        name: "Game",
        des: "",
        link: "/gaming",
      },
      {
        id: 104.5,
        name: "Token Extensions",
        des: "",
        link: "/token",
      },
    ],
  },
];
