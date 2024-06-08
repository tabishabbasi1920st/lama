import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const LamaContext = createContext();

const LamaContextProvider = ({ children }) => {
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
      }}
    >
      {children}
    </LamaContext.Provider>
  );
};

export default LamaContextProvider;
