import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import kamreo from "../public/kamreo-pose.png";
import code from "../public/code.png";
import cicd from "../public/cicd.png";
import server from "../public/data-server.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import * as THREE from "three";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles;

    // Create the scene
    scene = new THREE.Scene();

    // Create the camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Create the renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create the particles
    particles = new THREE.Group();
    scene.add(particles);

    const numParticles = 2000;

    for (let i = 0; i < numParticles; i++) {
      const particleColor = darkMode ? 0xffffff : 0x000000;
      const particle = new THREE.Sprite(
        new THREE.SpriteMaterial( { color: particleColor } )
      );

      particle.position.x = Math.random() * window.innerWidth - window.innerWidth / 2;
      particle.position.y = Math.random() * window.innerHeight - window.innerHeight / 2;
      particle.position.z = Math.random() * 1000 - 500;

      particle.scale.set(0.6, 0.6, 1);

      particles.add(particle);
    }

    // Animate the particles
    function animate() {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    }

    animate();

    // Clean up on unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <div className="content-wrapper">
          <div className="particle-container" ref={containerRef}></div>
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl">developed by kamreo</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="CV.pdf" target="_blank" rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-5xl py-2 text-blue-600 font-medium dark:text-blue-400 md:text-6xl"
            >
              Kamil Jonak
            </motion.h2>
            <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="text-2xl py-2 dark:text-white md:text-3xl"
            >
              Software Developer and DevOps.
            </motion.h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Developer providing services for programming and devops needs. Find out more about me and my projects!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://github.com/kamreo" target="_blank" rel="noreferrer"><AiFillGithub className="hover:text-blue-500"/></a>
                <a href="https://pl.linkedin.com/in/kamil-jonak-650b58178" target="_blank" rel="noreferrer"><AiFillLinkedin className="hover:text-blue-500"/></a>
              </div>
              <div className="mx-auto bg-gradient-to-b from-blue-500 rounded-full w-48 h-48 md:w-96 md:h-96 relative overflow-hidden mt-20">
                <Image src={kamreo} layout="fill" objectFit="cover" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a developer, I&quot;ve done remote work for
                <span className="text-blue-500"> agencies </span>
                consulted for <span className="text-blue-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer a wide range of services, including
                backend programming, CI/CD pipelines creation and server infrastructure administration.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Web development
                </h3>
                <p className="py-2">
                  I worked both on backend and frontend in web development so I can create and design your website from scratch!
                </p>
                <h4 className="py-4 text-blue-600">Tools I Use</h4>
                <p className="text-gray-800 py-1">Symfony</p>
                <p className="text-gray-800 py-1">.NET</p>
                <p className="text-gray-800 py-1">Vue JS</p>
                <p className="text-gray-800 py-1">TypeScript</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={cicd} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  DevOps
                </h3>
                <p className="py-2">
                  Creation of CI/CD pipelines and code automation is something I fell in love with from the first sight.
                </p>
                <h4 className="py-4 text-blue-600">Tools I Use</h4>
                <p className="text-gray-800 py-1">Gitlab CI/CD pipelines</p>
                <p className="text-gray-800 py-1">Jenkins</p>
                <p className="text-gray-800 py-1">Docker</p>
                <p className="text-gray-800 py-1">Ansible</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={server} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Server infrastracture</h3>
                <p className="py-2">
                  I used to monitor and manage server infrastracture in the past. 
                </p>
                <h4 className="py-4 text-blue-600">Tools I Use</h4>
                <p className="text-gray-800 py-1">Nginx</p>
                <p className="text-gray-800 py-1">Apache</p>
                <p className="text-gray-800 py-1">Zabbix</p>
                <p className="text-gray-800 py-1">Grafana</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I completed a lot of projects on my university and in my working experience. You can check them out <span className="text-blue-500"> <a href="https://github.com/kamreo" rel="noreferrer" target="_blank" >here.</a> </span>
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-3xl py-1 dark:text-white">Contact Me</h3>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
