const { ListNode } = require("./ImplementLinkedList");

const reverseLinkList = (head) => {
  let prev = null;

  while (head !== null) {
    let next_node = head.next;
    head.next = prev;
    head = next_node;
  }
  return prev;
};

// head.next =prev
// prev = head
// head = next_node
