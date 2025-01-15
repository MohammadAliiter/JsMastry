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
var addTwoNumbers = function(l1, l2) {
     
    let dummyhead = new ListNode(0);
    let current = dummyhead;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0){
         
         let val1 = l1 ? l1.val : 0;
         let val2 = l2 ? l2.val : 0;

         let sum = val1 + val2 + carry

         carry = Math.floor(sum/10);
         let newdigit = sum % 10;

         current.next = new ListNode(newdigit);
          current = current.next;

          if(l1)l1 =  l1.next
          if(l2) l2 = l2.next


         
    }


    return dummyhead.next;
 
};