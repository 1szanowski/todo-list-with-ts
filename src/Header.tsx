import React from "react";
import { ReactNode } from "react";
import { PropsWithChildren } from "react";

type imageProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header(props: imageProps) {
  return (
    <div>
      <img {...props.image} width="80px" />

      <p>{props.children}</p>
    </div>
  );
}
