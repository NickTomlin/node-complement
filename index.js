module.exports = function complement (fun) {
  return function () {
    return !fun.apply(this, arguments);
  }
};
