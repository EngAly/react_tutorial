import React from "react";

// you can init default value in context
const context = React.createContext("Mohamed");

const Provider = context.Provider;

const Consumer = context.Consumer;

export { Provider, Consumer };
