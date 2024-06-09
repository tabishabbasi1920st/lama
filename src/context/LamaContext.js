import { act, createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const LamaContext = createContext();

const LamaContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("lama_user"))
  );

  useEffect(() => {
    localStorage.setItem("lama_user", JSON.stringify(userInfo));
  }, [userInfo]);

  const [projects, setProjects] = useState([
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
    {
      id: uuidv4(),
      projectName: "Sample Project",
      totalEpisodes: 4,
      lastModified: "Last edited a week ago",
    },
  ]);

  return (
    <LamaContext.Provider
      value={{
        projects,
        setProjects,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </LamaContext.Provider>
  );
};

export default LamaContextProvider;
