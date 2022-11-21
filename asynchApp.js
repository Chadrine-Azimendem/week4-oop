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

// logs "post1", "post2", "post3", "post4" because allposts2 is passed in as a parameter.
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

// logs [ 'Dave', 'Gary', 'Steve', 'Charlie' ] to the console.
let users1 = ["Dave", "Gary", "Steve"];
const addUser1 = (username, fn) => {
  setTimeout(() => {
    users1.push(username);
    fn();
  }, 2000);
};
const getUsers1 = () => {
  setTimeout(() => {
    console.log(users1);
  }, 1000);
};
addUser1("Charlie", getUsers1);

//logs [ 'Dave', 'Gary', 'Steve', 'Charlie' ] to the console using native promises
let users2 = ["Dave", "Gary", "Steve"];
const addUser2 = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users2.push(username);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("oops there has been an error");
      }
    }, 2000);
  });
};
const getUsers2 = () => {
  setTimeout(() => {
    console.log(users2);
  }, 1000);
};

addUser2("Charlie")
  .then(getUsers2)
  .catch((err) => {
    console.log(err);
  });

//logs [ 'Dave', 'Gary', 'Steve', 'Charlie' ] to the console With async and await.
let users3 = ["Dave", "Gary", "Steve"];
const addUser3 = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users3.push(username);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("oops there has been an error");
      }
    }, 2000);
  });
};
const getUsers3 = () => {
  setTimeout(() => {
    console.log(users3);
  }, 1000);
};

async function init() {
  await addUser3("Charlie");
  getUsers3();
}

init();

const myAsyncFunction1 = () => {
  return new Promise((resolve, reject) => {
    let a = 1 + 3;
    if (a == 2) {
      resolve("My promise has been resolved");
    } else {
      reject("My promise has been rejected");
    }
  });
};
myAsyncFunction1()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// search about this!
const myAsyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    let a = 1 + 0;
    if (a == 2) {
      resolve("My promise has been resolved");
    } else {
      reject("My promise has been rejected");
    }
  });
};

async function init() {
  let response = await myAsyncFunction2();
  console.log(response);
}

init();
