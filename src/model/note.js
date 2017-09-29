/*This file should contain the structure of the NOTE model.
Note should have a title, content, and metadata.
MD should not be saved with the content.
MD should contain, author, createdDate, updatedOn, tags*/

'use strict';

const noteMap = new WeakMap();

class Note {
  constructor(title,content,md) {
    //destructuring an array
    const [author, createdOn, updatedOn, tags] = md
    const myMD = new metaData(author, createdOn,updatedOn, tags)
    //console.log(md);
    noteMap.set(this, {title, content, metadata:myMD})
  }

  getTitle() {
    //destructuring an object
    const {title} = noteMap.get(this)
    return title;
}

  getTags() {
    //const tag = (noteMap.get(this).metadata._tags)
    const { metadata: {_tags} } = noteMap.get(this)
    //console.log(t);
    return _tags;
  }

  getContent() {
    const {content} = noteMap.get(this)
    return content;
  }

  getCreatedDate() {
    return noteMap.get(this).metadata._createdOn;
  }

  getUpdatedOn() {
    const {metadata: {_updatedOn}} = noteMap.get(this)
    return _updatedOn;
  }

}

/**
Encapsulation via the module system
This class is not visible outside as it is not exported
**/
class metaData {
  constructor(author,createdOn, updatedOn, tags) {
    //console.log(tags);
    this._author = author;
    this._createdOn = createdOn;
    this._updatedOn = updatedOn;
    this._tags = tags;
  }
}

module.exports = {
  Note
}
