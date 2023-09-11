import Container from "@/components/container/container";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

import styles from "./layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Container className="justify-between h-16 items-center">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Image
                src="images/logo.svg"
                alt="b world"
                width={61}
                height={25}
              />
            </Link>
            <span className="inline-block h-[32px] w-[1px] bg-purple-300"></span>
            <span className="inline-block max-w-[60px] text-purple-300 text-xs">
              We love books
            </span>
          </div>
          <div className="flex min-[1100px]:gap-16 min-[928px]:gap-12 gap-6 items-center">
            <div className="hidden min-[480px]:block min-[480px]:relative">
              <input
                className={styles.input}
                placeholder="Type any book here"
              />
              <Image
                className={styles.icon}
                src="images/search.svg"
                alt="search icon"
                width={20}
                height={20}
              />
            </div>
            <nav className={styles.secondaryNav}>
              <ul className="flex lg:gap-6 gap-4">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Warranty</Link>
                </li>
                <li>
                  <Link href="#">Shopping</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
              </ul>
            </nav>
            <nav className="flex items-center">
              <LargeScreenProfileItems />
              <SmallScreenProfileItems />
            </nav>
            <button className={styles.hamburger}>
              <Image
                src="images/menu.svg"
                alt="cart svg"
                width={24}
                height={24}
              />
            </button>
          </div>
        </Container>
        <hr className={styles.horizontalRule} />
        <Container className={styles.primaryNavContainer}>
          <nav>
            <ul className={styles.primaryNavList}>
              <li>
                <Link href="#">The must read</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Promotion of the mount</Link>
              </li>
              <li>
                <Link href="#">Publish</Link>
              </li>
              <li>
                <Link href="#">Subscribe to the newsletter</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className={styles.requestCallList}>
              <li>
                <Image
                  className="inline-block"
                  src="images/phone.svg"
                  alt="phone svg"
                  width={24}
                  height={24}
                />{" "}
                +445 87 999 000
              </li>
              <li>
                <button className={styles.requestButton}>Request a call</button>
              </li>
            </ul>
          </nav>
        </Container>
        <hr className={styles.horizontalRule} />
      </header>
      {children}
      <footer></footer>
    </div>
  );
}

function LargeScreenProfileItems() {
  return (
    <ul className="min-[560px]:flex lg:gap-4 gap-2 items-center hidden">
      <li className={styles.phone}>
        <Image
          className="inline-block"
          src="images/phone.svg"
          alt="phone svg"
          width={24}
          height={24}
        />{" "}
        +445 87 999 000
      </li>
      <li>
        <Link href="#">
          <Image src="images/cart.svg" alt="cart svg" width={24} height={24} />
        </Link>
      </li>
      <li>
        <span className="inline-block h-[20px] w-[1px] bg-purple-300"></span>
      </li>
      <li className={styles.favorite}>
        <Link href="#">
          <Image
            src="images/favorite.svg"
            alt="cart svg"
            width={24}
            height={24}
          />
        </Link>
        <div className={styles.badge}>3</div>
      </li>
      <span className="inline-block h-[20px] w-[1px] bg-purple-300"></span>
      <li>
        <Link href="#">
          <Image
            src="images/profile.svg"
            alt="cart svg"
            width={24}
            height={24}
          />
        </Link>
      </li>
    </ul>
  );
}

function SmallScreenProfileItems() {
  return (
    <ul className="min-[560px]:hidden block">
      <li>
        <Link href="#">
          <Image src="images/cart.svg" alt="cart svg" width={24} height={24} />
        </Link>
      </li>
    </ul>
  );
}
