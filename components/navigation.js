import Link from "next/link";

function navigation() {
  return (
    <nav className="flex bg-primary text-white py-4 px-8 items-center">
      <div className="font-bold flex-grow text-2xl md:text-4xl">
        <Link href="/">
          <a className=" hover:bg-gray-500">
            <span className="text-accent border-b-2 border-accent">J</span>
            <span className="text-white">ason Ma</span>
          </a>
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li className="mr-2 md:mr-6">
          <Link href="/blogs">
            <a className="text-white hover:text-accent hover:bg-white py-3 px-2 md:px-4 lg:px-6">
              Blogs
            </a>
          </Link>
        </li>
        <li className="mr-2 md:mr-6">
          <Link href="/projects">
            <a className="text-white hover:text-accent hover:bg-white py-3 px-2 md:px-4 lg:px-6">
              Projects
            </a>
          </Link>
        </li>
        <li className="mr-2 md:mr-6">
          <a
            className="text-white hover:text-accent hover:bg-white py-3 px-2 md:px-4 lg:px-6"
            href="#"
          >
            About
          </a>
        </li>
      </ul>
      <button className="bg-transparent hover:bg-accent text-accent hover:text-white py-2 px-2 md:px-4 lg:px-6 border border-accent hover:border-transparent whitespace-pre mr-2 md:mr-6">
        Contact me
      </button>
      <img
        className="md:hidden ml-2 -mr-4 cursor-pointer p-2"
        src="/assets/imgs/menu.svg"
        alt="Kiwi standing on oval"
      />
    </nav>
  );
}

export default navigation;
