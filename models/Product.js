const products = [
  {
    id: 1,
    title: "Evolution Container Apps",
    category: "Разработчики",
  },
  {
    id: 2,
    title: "Evolution Serverless Functions",
    category: "Разработчики",
  },
  {
    id: 3,
    title: "Evolution Artifact Registry",
    category: "Разработчики",
  },
  {
    id: 4,
    title: "Evolution API Gateway",
    category: "Разработчики",
  },
  {
    id: 5,
    title: "!!!",
    category: "Оно работает :D",
  },
];

const getProducts = async function () {
  return Promise.resolve(products);
};

exports.getProducts = getProducts;
