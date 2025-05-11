// components/AnimatedFilterBtns.tsx
import { useState } from "react";
import { motion } from "framer-motion";

// Interface defining the expected props
interface AnimatedFilterBtnsProps {
  onFilterChange: (selectedFilters: string[]) => void;
  onButtonClick?: (item: string) => void;
  onExpandToggle?: (isExpanded: boolean) => void;
  items: string[];
}

const AnimatedFilterBtns = ({
  onFilterChange,
  onButtonClick,
  onExpandToggle,
  items,
}: AnimatedFilterBtnsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTech, setSelectedTech] = useState("All");

  const toggleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);

    // Call the parent callback if provided
    if (onExpandToggle) {
      onExpandToggle(newExpandedState);
    }

    // Call the general click callback if provided
    if (onButtonClick) {
      // Fix: Only pass one parameter
      onButtonClick("main");
    }
  };

  const selectTech = (tech: string) => {
    setSelectedTech(tech);
    setIsExpanded(false);
    
    // Fix: Pass an array with the selected tech
    if (onFilterChange) {
      onFilterChange([tech]);
    }
    
    if (onButtonClick) {
      // Fix: Only pass one parameter
      onButtonClick(tech);
    }

    if (tech === "All") {
      setIsExpanded(false);
      if (onExpandToggle) {
        onExpandToggle(false);
      }
    }
  };

  const buttonSpacing = 0;

  const buttonVariants = {
    expanded: (i: number) => ({
      opacity: 1,
      y: buttonSpacing * (i + 1),
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.015,
      },
    }),
    collapsed: (i: number) => ({
      opacity: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: (items.length - i - 1) * 0.0,
      },
    }),
  };

  return (
    <div className="pt-14">
      <div className="flex flex-col items-start">
        {/* Button that changes between sort and all */}
        <motion.button
          className="tech-button text-left"
          onClick={toggleExpand}
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-block", width: "fit-content" }}
        >
          {isExpanded ? "All" : "Sort"}
        </motion.button>
        
        {/* Expanded buttons */}
        {isExpanded && (
          <div className="flex flex-col">
            {items.map((tech, index) => (
              <motion.button
                key={tech}
                className={`tech-button text-left ${
                  selectedTech === tech ? "active-tech" : "not-active-tech"
                }`}
                custom={index}
                initial="collapsed"
                animate="expanded"
                variants={buttonVariants}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectTech(tech)}
                style={{
                  display: "inline-block",
                  width: "fit-content",
                  marginTop: "2px",
                }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedFilterBtns;