"use client"; // Needed for Next.js app router if using `app/about/page.js`

import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <Link href="/">Go back to Home</Link>
       {/* Link to Login Page */}
       <br />
       <Link href="/login">Go to Login Page</Link>
    </div>
  );
}
