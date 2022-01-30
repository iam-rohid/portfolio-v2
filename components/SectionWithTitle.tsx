import React, { ReactNode } from "react";
import Container from "./Container";

const SectionWithTitle = ({
  children,
  title,
  description,
  sectionId,
}: {
  children: ReactNode;
  title: string;
  sectionId?: string;
  description?: string;
}) => {
  return (
    <section id={sectionId}>
      <Container>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {description && <p className="opacity-75">{description}</p>}
        {children}
      </Container>
    </section>
  );
};

export default SectionWithTitle;
