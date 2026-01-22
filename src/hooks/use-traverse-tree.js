const useTraverseTree = () => {
  function insertNode(tree, folderId, isFolder, item) {
    if (tree.id === folderId && tree.isFolder) {
      tree.item.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        item: [],
      });
      return tree;
    }
    const latestNode = tree.item.map((ob) => {
      return insertNode(ob, folderId, isFolder, item);
    });
    return { ...tree, item: latestNode };
  }
  return { insertNode };
};
export default useTraverseTree;
