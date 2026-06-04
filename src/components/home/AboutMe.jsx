import React from "react";
import axios from "axios";
import { motion } from "framer-motion";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const easeOut = [0.16, 1, 0.3, 1];

const AboutMe = ({ heading, message, link, imgSize, resume, transcript }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <section id="aboutme" className="about-section section-py">
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>

          {/* Flex row on large screens */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>

            {/* Profile image */}
            {showPic && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: easeOut }}
                style={{ flexShrink: 0 }}
              >
                <div className="about-image-wrap">
                  <div
                    className="about-image-ring"
                    style={{ width: imgSize + 12, height: imgSize + 12 }}
                    aria-hidden="true"
                  />
                  <img
                    className="about-image"
                    src={profilePicUrl}
                    alt="Supawich Sriviboonruttana, front-end developer"
                    style={{ width: imgSize, height: imgSize }}
                    draggable="false"
                  />
                </div>
              </motion.div>
            )}

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: easeOut }}
              style={{ flex: 1, minWidth: 280, maxWidth: 560 }}
            >
              <h2 className="section-heading" style={{ marginBottom: '0.5rem' }}>
                {heading}
              </h2>
              <div className="section-divider" />
              <p className="about-desc">
                {message}
              </p>

              {(resume || transcript) && (
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                  {resume && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-ryu btn-ryu--primary"
                      href={resume}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View resume PDF"
                    >
                      <i className="fas fa-file-pdf" style={{ fontSize: '0.85em' }} />
                      Resume
                    </motion.a>
                  )}
                  {transcript && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-ryu btn-ryu--ghost"
                      href={transcript}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View academic transcript"
                    >
                      <i className="fas fa-graduation-cap" style={{ fontSize: '0.85em' }} />
                      Transcript
                    </motion.a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
