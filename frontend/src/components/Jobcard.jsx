function Jobcard({ job, company, position, status, location }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{job}</h2>
      <p className="text-gray-700">{company}</p>

      <div className="flex justify-between mt-2">
        <p className="text-sm text-gray-600">
          Position: <span className="font-medium">{position}</span>
        </p>

        <span
          className={`px-2 py-1 text-xs rounded-md font-semibold 
            ${status === "pending" ? "bg-yellow-200 text-yellow-800" : ""}
            ${status === "interview" ? "bg-blue-200 text-blue-800" : ""}
            ${status === "declined" ? "bg-red-200 text-red-800" : ""}
          `}
        >
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        Location: <span className="font-medium">{location}</span>
      </p>
    </div>
  );
}

export default Jobcard;
