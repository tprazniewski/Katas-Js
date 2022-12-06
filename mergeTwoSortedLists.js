const { ListNode, LinkedList } = require("./ImplementLinkedList");

const node1 = new ListNode(5);
const node2 = new ListNode(10);
const node3 = new ListNode(15);
node1.next = node2;
node2.next = node3;

const list = new LinkedList(node1);

const node1_2 = new ListNode(2);
const node2_2 = new ListNode(4);
const node3_2 = new ListNode(8);
node1_2.next = node2_2;
node2_2.next = node3_2;

const list2 = new LinkedList(node1_2);

// console.log(list);
// console.log(list2);

const mergeTwoLists = function (list1, list2) {
  const temp = new ListNode();
  let prev = temp;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;
  return temp.next;
};

const mergeList = mergeTwoLists(list, list2);
console.log(mergeList);
