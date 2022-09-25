import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Vikas-kashyap123",
    },
    {
      id: 3,
      child: (
        <>
          Mail <FaGithub size={30} />
        </>
      ),
      href: "mailto:vkashyap81098@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaGithub size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden flex-col top-[35%] left-0 fixed md:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "hover:rounded-md duration-300 hover:ml-[-10px] ml-[-100px] flex justify-between items-center w-40 h-14 px-4 bg-gray-500" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
