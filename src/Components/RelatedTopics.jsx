import React from "react";

const RelatedTopics = () => {
  const topics = [
    "Design Thinking",
    "Web Accessibility",
    "Interaction Design",
    "Figma",
    "Prototyping",
    "Product Management",
  ];

  return (
    <div>
      <h2 className="font-semibold mb-3">Related Topics</h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 border rounded-md text-sm text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
