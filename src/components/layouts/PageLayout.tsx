import { HTMLAttributes } from "react";
import clsx from "clsx";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export type PageLayoutProps = HTMLAttributes<HTMLDivElement> & {
  headerClassName?: string;
  rootClassName?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
};

export default function PageLayout({
  rootClassName,
  hideHeader,
  hideFooter,
  children,
  className,
  ...otherProps
}: PageLayoutProps) {
  return (
    <div className={clsx(rootClassName, "page-layout")} {...otherProps}>
      {!hideHeader && <Header className="page-layout__header" />}
      <main className={clsx("page-layout__main", className)}>{children}</main>
      {!hideFooter && <Footer className="page-layout__footer" />}
    </div>
  );
}
