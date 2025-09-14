import React, { useEffect, useRef } from "react";
import styles from "../styles/Feature.module.scss";
import { gsap } from "gsap";

const features = [
  { title: "Speed", desc: "Loads pages fast and stays fast." },
  { title: "Security", desc: "Built-in protections keep you safe online." },
  { title: "Extensions", desc: "Customize Chrome with extensions." }
];

export default function FeatureStrip() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 30,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out"
      });

      // slight floating animation on all cards
      gsap.to(cardsRef.current, {
        y: "-=6",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.6,
        stagger: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.features} ref={containerRef}>
      <div className={styles.container}>
        {features.map((f, i) => (
          <div
            className={styles.card}
            key={f.title}
            ref={el => (cardsRef.current[i] = el)}
          >
            <div className={styles.icon} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
