{
  /*
 
    An about page to display information about the application.

*/
}

import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className="shadow-sm text-gray-600 p-2">
        <h2>About</h2>
        <p className="shadow-sm text-gray-400 p-2">
          This is an about page to display information about the application.
        </p>
        </div>
    </div>
  );
};

export default About;
