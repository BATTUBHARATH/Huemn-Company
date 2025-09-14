import React, { useEffect, useRef } from "react";
import styles from "../styles/Hero.module.scss";
import { gsap } from "gsap";

export default function HeroSegment() {
  const rootRef = useRef(null);
  const windowRef = useRef(null);
  const chromeBarRef = useRef(null);
  const bigTextRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(bigTextRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out"
      })
        .from(subTextRef.current, {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.4")
        .from(windowRef.current, {
          scale: 0.95,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power4.out"
        }, "-=0.4")
        .to(chromeBarRef.current, {
          x: 12,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "sine.inOut"
        }, "-=0.2");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={styles.content}>
        <h1 ref={bigTextRef} className={styles.title}>Fast, secure browsing</h1>
        <p ref={subTextRef} className={styles.subtitle}>
          Chrome gives you more features to browse smarter and faster.
        </p>
      </div>

      <div className={styles.visualWrap}>
        <div className={styles.window} ref={windowRef}>
          <div className={styles.chromeBar} ref={chromeBarRef}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.tabPulse} />
            <div className={styles.mockContent}>
              <div className={styles.rectRow}>
                <div className={styles.rect} />
                <div className={styles.rect} />
                <div className={styles.rect} />
              </div>
              <div className={styles.rectRow}>
                <div className={styles.rect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
