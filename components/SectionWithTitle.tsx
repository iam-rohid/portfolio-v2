import React, { ReactNode } from "react";
import Container from "./Container";

const SectionWithTitle = ({
  children,
  title,
  description,
  sectionId,
  trailing,
}: {
  children: ReactNode;
  title: string;
  sectionId?: string;
  description?: string;
  trailing?: string;
}) => {
  return (
    <section id={sectionId}>
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold mb-4 flex-1">{title}</h3>
          {trailing && <p className="opacity-75">{trailing}</p>}
        </div>
        {description && <p className="opacity-75">{description}</p>}
        {children}
      </Container>
    </section>
  );
};

export default SectionWithTitle;
