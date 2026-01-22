import "./styles.css";
import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-tree";
import explorer from "./data/folderData.js";
import Folder from "./components/Folder.js";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, isFolder, item) => {
    const finalTree = insertNode(explorerData, folderId, isFolder, item);

    setExplorerData(finalTree);
  };
  console.log(explorerData);

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
