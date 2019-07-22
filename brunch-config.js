module.exports = {
  paths: {
    watched: ["assets", "src"]
  },

  files: {
    stylesheets: {
      joinTo: {
        "css/vendor.css": /^node_modules/,
        "css/app.css": "src/css/*.css"
      }
    }
  },

  npm: {
    styles: {
      "pure-css": ["lib/base.css", "lib/forms.css", "lib/grids.css"]
    }
  }
};
