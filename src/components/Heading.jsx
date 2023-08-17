import React from "react";

const Heading = ({ className, as, children }) => {
  const classString = `max600:text-lg text-xl ${className}`;
  const getTag = (as) => {
    // returns the jsx that is below with the correct tag
    switch (as) {
      case "h1":
        return <h1 className={classString}>{children}</h1>;
      case "h2":
        return <h2 className={classString}>{children}</h2>;
      case "h3":
        return <h3 className={classString}>{children}</h3>;
      case "h4":
        return <h4 className={classString}>{children}</h4>;
      case "h5":
        return <h5 className={classString}>{children}</h5>;
      case "h6":
        return <h6 className={classString}>{children}</h6>;
      default:
        return (
          <h1 className={`max600:text-lg text-xl ${className}`} as={as}>
            {children}
          </h1>
        );
    }
  };
  return getTag(as);
};

export default Heading;
