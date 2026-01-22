const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  item: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      item: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          item: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              item: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              item: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          item: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      item: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          item: [],
        },
        {
          id: "9",
          name: "index.js",
          isFolder: false,
          item: [],
        },
        {
          id: "10",
          name: "style.css",
          isFolder: false,
          item: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      item: [],
    },
  ],
};

export default explorer;
