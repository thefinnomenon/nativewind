const { hairlineWidth } = require("../../../dist");

module.exports = {
  content: [`${__dirname}/code.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
};
