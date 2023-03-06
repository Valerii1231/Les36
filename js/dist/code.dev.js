"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//  1
var usersName = ['Mike', 'Bob', 'Nikola'];
var x = usersName[0],
    y = usersName[1],
    z = usersName[2];
var users = {};
users = {
  mike: x,
  bob: y,
  nikola: z
};
console.log(users); //  2

var salaries = {
  "Mike": 1500,
  "Bob": 1800,
  "Nikola": 1700
};

function maxSalary(salaries) {
  var arrSalaries = Object.entries(salaries);
  var sal = arrSalaries.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        salary = _ref2[1];

    return salary;
  });
  var maxSal = 0;
  var maxIndex = -1;

  for (var i = 0; i < sal.length; i++) {
    if (sal[i] > maxSal) {
      maxSal = sal[i];
      maxIndex = i;
    }
  }

  return arrSalaries[maxIndex][0];
}

console.log(maxSalary(salaries)); //   3

users = {
  mike: 'Mike',
  bob: 'Bob',
  nikola: 'Nikola'
};
var _users = users,
    userMike = _users.mike,
    userBob = _users.bob,
    userNikola = _users.nikola;
console.log(userMike);
console.log(userBob);
console.log(userNikola);