const presets = [
  "@babel/react",
  "@babel/typescript",
  [
    "@babel/env",
    {
      "modules": false
    }
  ],
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-syntax-dynamic-import",
];

process.env["NODE_ENV"] === 'production' && plugins.push("react-remove-properties");

module.exports = { presets, plugins };
