import React from 'react';

const resources = [
  { name: 'Resource 1', url: 'https://example.com/resource1' },
  { name: 'Resource 2', url: 'https://example.com/resource2' },
  // Add more resources here
];

function ResourcePage() {
  return (
    <div>
      <h1>Resource Page</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcePage;
