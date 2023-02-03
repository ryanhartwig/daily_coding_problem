
const NodeTree = 
{
  cost: 0,
  children: [
    {
      cost: 5,
      children: [
        {
          cost: 8,
          children: []
        },
        {
          cost: 2,
          children: []
        }
      ]
    }, {
      cost: 3,
      children: [
        {
          cost: 8,
          children: []
        }
      ]
    }
  ]
}


function findminpath (rootNode) {
  let minCost = 100000

  function depthfirsttraverse(node, totalCost) {
    totalCost += node.cost;

    if (totalCost > minCost) {
      return;
    }
    if (!node.children.length && totalCost < minCost) {
      minCost = totalCost;
      return;
    }
    node.children.forEach((child) => {
      depthfirsttraverse(child, totalCost);
    })
  }

  depthfirsttraverse(rootNode, 0)
  return minCost;
}

console.log(findminpath(NodeTree));



