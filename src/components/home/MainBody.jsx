import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { motion } from "framer-motion";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 unselectable"
      >
        <Container className="text-center relative z-10 flex flex-col items-center">
          <motion.h1 
            ref={ref} 
            className="display-1 font-bold text-6xl md:text-8xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typist>
              <div className="lead typist text-xl md:text-3xl font-light tracking-wide text-gray-100 drop-shadow-md">
                {message}
              </div>
            </Typist>
          </motion.div>
          <motion.div 
            className="p-5 flex justify-center gap-8 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {icons.map((icon, index) => (
              <motion.a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-white transition-colors duration-300 backdrop-blur-md bg-white/10 border border-white/20 w-16 h-16 flex items-center justify-center rounded-full shadow-2xl"
              >
                <i className={`fab ${icon.image} fa-2x`} />
              </motion.a>
            ))}
          </motion.div>
          <motion.a
            className="inline-block mt-8 px-10 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 text-white font-bold tracking-wider uppercase text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] no-underline"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            About me
          </motion.a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
