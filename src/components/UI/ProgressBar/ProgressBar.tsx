import css from "./ProgressBar.module.css";

interface ProgressBarProps {
  initialLevel: number;
  currentLevel: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  initialLevel,
  currentLevel,
}) => {
  const levels = ["0", "A1", "A2", "B1", "B2", "C1"];
  // const visibleLevels = [initialLevel, currentLevel, levels.length - 1];

  const getProgressPercentage = (initial: number, current: number) => {
    if (current <= initial) return 0;
    const progress = ((current - initial) / (levels.length - 1)) * 100;
    return progress;
  };

  const progress = getProgressPercentage(0, currentLevel);

  return (
    <>
      {/* <div className={css.progressContainer}>
        <div className={css.progressBar} style={{ width: `${progress}%` }}>
          <div className={css.progressEdge}></div>
        </div>
        <div className={css.levels}>
          {levels.map((level, index) => {
            const isVisible = visibleLevels.includes(index);

            return (
              <div
                key={level}
                className={`${css.level} ${isVisible ? "" : css.hiddenLevel}`}
                style={{
                  left: `${(index / (levels.length - 1)) * 100}%`,
                }}
              >
                {isVisible ? level : ""}
              </div>
            );
          })}
        </div>
      </div> */}
      <div className={css.progressContainer}>
        <div className={css.progressBar} style={{ width: `${progress}%` }}>
          <div className={css.progressEdge}></div>
        </div>
        <div className={css.levels}>
          {levels.map((level, index) => (
            <div
              key={level}
              // className={`${css.level} ${index <= currentLevel ? css.active : ""}`}
              className={css.level}
              style={{
                left: `${(index / (levels.length - 1)) * 100}%`,
              }}
            >
              {level}
            </div>
          ))}
        </div>
        <div
          className={css.initialIndicator}
          style={{
            left: `${(initialLevel / (levels.length - 1)) * 100}%`,
          }}
        >
          <span className={css.initialText}>Початок</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
