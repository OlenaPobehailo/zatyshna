import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/book-lesson">Book a Lesson</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
