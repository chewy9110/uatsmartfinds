class MessageListClass {

    constructor () {
        this.allMessageList = [];
    }
  
    addMessageList(msgID, productID, fromUserID, toUserID, msgText, dateUpdated) {
        const messageItem = {
            msgID : msgID,
            productID : productID,
            fromUserID : fromUserID,
            toUserID : toUserID,
            msgText : msgText,
            dateUpdated : dateUpdated
        }
  
        this.allMessageList.push(messageItem);
    }
  
    getMessageList(userID) {
      // get the list of messagelist items based on loginid
      const messageListByID = this.allMessageList.filter(currlist => (
          currlist.fromUserID == userID || currlist.toUserID == userID
      ));
      // console.log(messageListByID);
  
      return messageListByID;
    }
  }