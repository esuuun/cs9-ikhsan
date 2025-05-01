import React from "react";

function Footer() {
  return (
    <footer className="border-t px-4 py-6 md:py-0 w-full">
      <div className="container mx-auto max-w-screen-xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 ShopNow. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm font-medium hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
