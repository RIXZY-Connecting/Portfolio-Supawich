import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { motion } from "framer-motion";

const ProjectCard = ({ value, index }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#1B1A55]/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-[#9290C3]/20 hover:border-[#9290C3]/50 transition-all duration-300 flex flex-col h-full"
    >
      <h5 className="text-2xl font-bold text-white mb-3">
        {name || <Skeleton className="bg-white/10" />}
      </h5>
      <p className="text-gray-300 flex-grow mb-6">
        {(!description) ? "" : description || <Skeleton count={3} className="bg-white/10" />}
      </p>
      
      {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} className="bg-white/10" />}
      
      <div className="w-full h-px bg-white/10 my-4"></div>
      
      {languages_url ? (
        <Language languages_url={languages_url} repo_url={svn_url} />
      ) : (
        <Skeleton count={1} className="bg-white/10" />
      )}
      
      {value ? (
        <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
      ) : (
        <Skeleton className="bg-white/10" />
      )}
    </motion.div>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium text-sm transition-colors no-underline"
      >
        <i className="fab fa-github mr-2" /> Clone Project
      </a>
      <a 
        href={svn_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gradient-to-r from-[#9290C3] to-[#ff7f7f] hover:opacity-90 rounded-lg text-white font-medium text-sm transition-opacity no-underline shadow-md"
      >
        <i className="fab fa-github mr-2" /> Repository
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {array.length ? array.map((language) => (
        <a
          key={language}
          href={repo_url + `/search?l=${language}`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <span className="px-3 py-1 bg-[#1B1A55] border border-white/5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:border-[#9290C3] transition-colors">
            {language}: {Math.trunc((data[language] / total_count) * 1000) / 10}%
          </span>
        </a>
      )) : (
        <span className="text-sm text-gray-500">Code yet to be deployed.</span>
      )}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <div className="flex justify-between items-center mt-auto">
      <a
        href={repo_url + "/stargazers"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#ff7f7f] transition-colors no-underline flex items-center"
      >
        <i className="fas fa-star mr-2" /> Stars
        <span className="ml-2 bg-white/10 px-2 py-0.5 rounded-md text-xs">{star_count}</span>
      </a>
      <small className="text-gray-500 text-xs">Updated {updated_at}</small>
    </div>
  );
};

export default ProjectCard;
