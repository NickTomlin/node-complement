module.exports = function (fun) {
  return function () {
    return !fun.apply(this, arguments);
  }
};
