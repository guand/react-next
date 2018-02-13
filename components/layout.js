import Link from 'next/link'

export default ({ children }) => 
  <div>
    <nav>
      <Link href="/">Home</Link> &middot;
      <Link href="/about">About</Link>
    </nav>

    <main>
      {children}
    </main>

    <footer>
      &copy; 2018
    </footer>
  </div>