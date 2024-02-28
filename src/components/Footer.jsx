import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Compatibility Calculator. All rights reserved |
            Made with ❤️ by devraj.
          </p>
          <p className="text-gray-400 mt-2">
            API provided by{" "}
            <a
              href="https://rapidapi.com/user/ajith"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ajith
            </a>{" "}
            via{" "}
            <a
              href="https://rapidapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              RapidAPI
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
