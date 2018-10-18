function loadConfig() {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
    }
  }

module.exports = function(api) {
    api.cache(true);
    loadConfig();
    return {
    
    };
}