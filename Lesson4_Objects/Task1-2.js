"use strict";
// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }
// Post.prototype.edit = function (text) {
//     this.text = text;
// };
// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// };

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let aPost = new AttachedPost("Genry", "MegaText", 1991);
aPost.makeTextHighlighted();
aPost.edit("newText");
let t = 0;
