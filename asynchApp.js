// logs only pos1, post2, post3 even though we call createPost() before allPosts()
let myPosts1 = ["post1", "post2", "post3"];
const allPosts1 = () => {
  setTimeout(() => {
    myPosts1.map((post) => console.log(post));
  }, 1000);
};
const createPost1 = (post) => {
  setTimeout(() => {
    myPosts1.push(`${post}`);
  }, 2000);
};
createPost1("post4");
allPosts1();

// We need to call allPosts AFTER we
// know createPost is completed. This
// is where a callback can be used.

// logs "post1", "post2", "post3" because allposts2 is passed in as a parameter.
let myPosts2 = ["post1", "post2", "post3"];
const allPosts2 = () => {
  setTimeout(() => {
    myPosts2.map((post) => console.log(post));
  }, 1000);
};

// calls callback() only after createPost2 is completed
const createPost2 = (post, callback) => {
  setTimeout(() => {
    myPosts2.push(`${post}`);
    callback();
  }, 2000);
};
createPost2("post4", allPosts2);
