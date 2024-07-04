import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="text-center my-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
        Days I <span className="purple">Code</span>
      </h1>
      <div className="flex justify-center overflow-x-auto px-4">
        <GitHubCalendar
          username="PavanKumar529"
          blockSize={12}
          blockMargin={4}
          color="#c084f5"
          fontSize={14}
          fullYear={false}
        />
      </div>
    </div>
  );
}

export default Github;
