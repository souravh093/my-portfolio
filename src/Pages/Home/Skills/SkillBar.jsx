const SkillBar = ({ label, progress }) => {
    return (
      <div className="mb-4">
        <span>{label}</span>
        <div className="h-4 bg-gray-200 rounded-full relative">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

export default SkillBar;