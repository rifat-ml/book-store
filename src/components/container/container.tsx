import cx from "classnames";
import { ReactNode } from "react";

import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
