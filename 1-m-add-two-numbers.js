/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const result = [];
  while (l1 || l2) {
    const digit1 = l1?.val || 0;
    const digit2 = l2?.val || 0;
    let resultDigit = digit1 + digit2 + carry;

    if (resultDigit > 9) {
      carry = 1;
      resultDigit = resultDigit - 10;
    } else {
      carry = 0;
    }
    result.push(resultDigit);
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry === 1) {
    result.push(1);
  }

  let previousNode = new ListNode(result[result.length - 1]);
  for (let i = result.length - 2; i >= 0; i--) {
    const newNode = new ListNode(result[i], previousNode);
    previousNode = newNode;
  }

  return previousNode;
};
