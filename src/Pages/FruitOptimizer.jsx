import React from 'react';

const FruitOptimizer = () => {
  const capacity = 10;
  const fruits = [
    { volume: 3, weight: 100 },
    { volume: 4, weight: 200 },
    { volume: 5, weight: 150 },
    { volume: 2, weight: 120 },
    { volume: 1, weight: 90 },
  ];

  const getBestFruits = () => {
    let start = 0;
    let currentVolume = 0;
    let currentWeight = 0;
    let maxWeight = 0;
    let bestRange = [0, -1];

    for (let end = 0; end < fruits.length; end++) {
      currentVolume += fruits[end].volume;
      currentWeight += fruits[end].weight;

      while (currentVolume > capacity && start <= end) {
        currentVolume -= fruits[start].volume;
        currentWeight -= fruits[start].weight;
        start++;
      }

      if (currentWeight > maxWeight) {
        maxWeight = currentWeight;
        bestRange = [start, end];
      }
    }

    return fruits.slice(bestRange[0], bestRange[1] + 1);
  };

  const result = getBestFruits();

  return (
    <div>
      <h2>Best Fruits:</h2>
      <ul>
        {result.map((fruit, index) => (
          <li key={index}>
            Volume: {fruit.volume}, Weight: {fruit.weight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitOptimizer;
