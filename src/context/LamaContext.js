import { act, createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const LamaContext = createContext();

const LamaContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("lama_user"))
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const handleWidthLessThan1024 = () => {
    // Custom event logic
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowWidth(newWidth);
      setWindowHeight(newHeight);

      if (newWidth < 1024) {
        handleWidthLessThan1024();
      }
    };

    // Check initial width
    if (window.innerWidth < 1024) {
      handleWidthLessThan1024();
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LamaContext.Provider
      value={{
        projects,
        setProjects,
        userInfo,
        setUserInfo,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </LamaContext.Provider>
  );
};

export default LamaContextProvider;
