import Link from 'next/link';

const Navbar = () => {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <nav>
      <ul>
        <li><Link className={linkStyles} href="/">Home</Link></li>
        <li><Link className={linkStyles} href="/alertsPage/">Alerts</Link></li>
        <li><Link className={linkStyles} href="/settingsPage/">Settings</Link></li>
        <li><Link className={linkStyles} href="/feedbackPage/">Feedback</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
