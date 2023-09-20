import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <main>
      <section>
        {children}
      </section>
    </main>
  </div>
);
