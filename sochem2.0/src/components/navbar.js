import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="Events/Events"> Events </Link>
        </li>
        <li>
          <Link href="Funds/Funds"> Funds </Link>
        </li>
        <li>
          <Link href="Forum/Forum"> Forum </Link>
        </li>
        <li>
          <Link href="Cloud/Cloud"> Cloud </Link>
        </li>
        <li>
          <Link href="Family/Family"> Family </Link>
        </li>
        <li>
          <Link href="Login/Login"> Login </Link>
        </li>
      </ul>
    </div>
  )
}