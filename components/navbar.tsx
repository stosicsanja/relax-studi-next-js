import Link from "next/link"
export default function Navbar() {
  return (
    <div>
        <div>
            <Link href="/">
                <h2>Relax Studio</h2>
            </Link>
            <ul>
                <li>
                    <Link href="/">Naslovna</Link>
                </li>
                <li>
                    <Link href="/o-nama">O nama</Link>
                </li> 
                 <li>
                    <Link href="/korisnici">Korisnici</Link>
                </li>
                <li>
                    <Link href="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}
