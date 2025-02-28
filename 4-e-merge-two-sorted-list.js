/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const result = [];
  while (list1 || list2) {
    if (list1 === null) {
      result.push(list2.val);
      list2 = list2.next;
      continue;
    } else if (list2 === null) {
      result.push(list1.val);
      list1 = list1.next;
      continue;
    }

    const val1 = list1.val;
    const val2 = list2.val;

    if (val1 >= val2) {
      result.push(val2);
      list2 = list2.next;
    } else {
      result.push(val1);
      list1 = list1.next;
    }
  }
  if (result.length === 0) {
    return null;
  }

  let lastNode = new ListNode(result[result.length - 1]);
  for (let i = result.length - 2; i >= 0; i--) {
    const currentNode = new ListNode(result[i], lastNode);
    lastNode = currentNode;
  }

  return lastNode;
};
