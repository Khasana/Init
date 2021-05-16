import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>VB NATURE FUND</h1>
        <ul className="flex flex-col mr-auto list-none lg:flex-row">
          <li className="flex items-center">
            <Link href="/">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Нүүр
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/about">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Бидний тухай
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/ourWork">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Бид юу хийдэг вэ?
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="news">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Мэдээлэл
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/collaboration">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Хамтын ажиллагаа
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/contact">
              <a className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2">
                Холбоо барих
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
