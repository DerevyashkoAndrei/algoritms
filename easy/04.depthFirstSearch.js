const graph = {
  value: "A",
  childrens: [
    {
      value: "B",
      childrens: [
        { value: "E", childrens: [] },
        {
          value: "F",
          childrens: [
            { value: "I", childrens: [] },
            { value: "J", childrens: [] },
          ],
        },
      ],
    },
    { value: "C", childrens: [] },
    {
      value: "D",
      childrens: [
        { value: "G", childrens: [{ value: "K", childrens: [] }] },
        { value: "H", childrens: [] },
      ],
    },
  ],
};

const expected = "ABEFIJCDGKH";
const result = depthFirstSearch(graph);
console.log(
  result,
  `result must be ${expected.split("")}`,
  result.join("") === expected
);

function depthFirstSearch(graph, res = []) {
  res = res.concat(graph.value);

  for (const node of graph.childrens) {
    res = res.concat(depthFirstSearch(node));
  }

  return res;
}
