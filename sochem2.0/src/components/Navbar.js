import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <div>
            <Link href="/">
                <button>Home</button>
            </Link>
            <Link href="/Events/Events">
                <button>Events</button>
            </Link>
            <Link href="/Cloud/Cloud">
                <button>Cloud</button>
            </Link>
            <Link href="/Forum/Forum">
                <button>Forum</button>
            </Link>
            <Link href="/Family/Family">
                <button>Family</button>
            </Link>
            </div>
        </div>
    )
}