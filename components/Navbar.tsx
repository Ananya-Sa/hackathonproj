import React from "react";
import Link from "next/link";

function navbar() {
  return (
    <nav>
      <div className="space-x-3">
        <Link
          className="bg-blue-300 hover:bg-yellow-200 text-white px-4 py-2 rounded-md"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-blue-300 hover:bg-yellow-200 text-white px-4 py-2 rounded-md"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="bg-blue-300 hover:bg-yellow-200 text-white px-4 py-2 rounded-md"
          href="/friends"
        >
          Friends
        </Link>
        <Link
          className="bg-blue-300 hover:bg-yellow-200 text-white px-4 py-2 rounded-md"
          href="/notification"
        >
          Notification
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
