const CaseList = ({ cases }) => {
  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mt-4">Search Results</h2>
      {cases.length === 0 ? (
        <p>No cases found.</p>
      ) : (
        <ul className="space-y-3">
          {cases.map((caseItem, index) => (
            <li key={index} className="border p-3 rounded">
              <h3 className="font-semibold">{caseItem.title}</h3>
              <p className="text-sm">{caseItem.summary}</p>
              <a
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Read More
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CaseList;
