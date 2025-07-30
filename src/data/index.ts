import {
  Hash,
  Link,
  type LucideIcon,
  Notebook,
  Twitter,
  Video,
} from "lucide-react";
export interface peopleInterface {
  id: number;
  name: string;
  designation: string;
  image: string;
}
export const people: peopleInterface[] = [
  {
    id: 1,
    name: "Yasir Naseem",
    designation: "Software Engineer",
    image: "/logintestimonial.jpeg",
  },
  {
    id: 2,
    name: "Arvin",
    designation: "Product Manager",
    image: "logintestimonial2.jpeg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export interface SidebarButtonInterface {
  id: number;
  icon: LucideIcon;
  text: string;
  url: string;
}
export const SidebarButtons: SidebarButtonInterface[] = [
  {
    id: 1,
    icon: Twitter,
    text: "Tweets",
    url: "/tweets",
  },
  {
    id: 2,
    icon: Video,
    text: "Videos",
    url: "/videos",
  },
  {
    id: 3,
    icon: Notebook,
    text: "Notes",
    url: "/notes",
  },
  {
    id: 4,
    icon: Link,
    text: "Links",
    url: "/links",
  },
  {
    id: 5,
    icon: Hash,
    text: "Tags",
    url: "/tags",
  },
];
