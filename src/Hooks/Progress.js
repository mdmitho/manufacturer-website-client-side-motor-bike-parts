import React from "react";

const Progress = () => {
  return (
    <div
      className="grid
      grid-rows-1 gap-5 my-10 "
    >
      <h1 className="font-bold text-primary">My Skills</h1>
      <label htmlFor="">
        <h1 className="text-success">HTML</h1>
        <progress className="progress progress-info h-5 w-96" value="100" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">CSS</h1>
        <progress className="progress progress-info h-5 w-96" value="100" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">Bootstarap</h1>
        <progress className="progress progress-info h-5 w-96" value="100" max="100"></progress>
      </label>

      <label htmlFor="">
        <h1 className="text-success">Tailwind CSS</h1>
        <progress className="progress progress-info h-5 w-96" value="100" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">JavaScript</h1>
        <progress className="progress progress-info h-5 w-96" value="95" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">Git Hub</h1>
        <progress className="progress progress-info h-5 w-96" value="95" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">React</h1>
        <progress className="progress progress-info h-5 w-96" value="95" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">Firebase</h1>
        <progress className="progress progress-info h-5 w-96" value="90" max="100"></progress>
      </label>
      <label htmlFor="">
        <h1 className="text-success">MongoDB</h1>
        <progress className="progress progress-info h-5 w-96" value="90" max="100"></progress>
      </label>
    </div>
  );
};

export default Progress;
