//PROMISES AND CALLBACKS 
//TASK1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

//TASK2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});
promise2.catch((error) => {
  console.log(error);
});

//TASK3
const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data 1");
    }, 1000);
  });
};
const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data 2");
    }, 1000);
  });
};
const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data 3");
    }, 1000);
  });
};
fetchData1()
  .then((message1) => {
    console.log(message1);
    return fetchData2();
  })
  .then((message2) => {
    console.log(message2);
    return fetchData3();
  })
  .then((message3) => {
    console.log(message3);
  });

//TASK4
const resolvePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });
};

const asyncFunction = async () => {
  const result = await resolvePromise();
  console.log(result);
};
asyncFunction();

//TASK5
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected");
    }, 2000);
  });
};
const asyncFunctionWithCatch = async () => {
  try {
    const result = await rejectPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
asyncFunctionWithCatch();

//TASK6
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//TASK7
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

//TASK8
const promises1 = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => response.json()
);
const promises2 = fetch("https://jsonplaceholder.typicode.com/comments").then(
  (response) => response.json()
);

Promise.all([promises1, promises2])
  .then((results) => {
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
  })
  .catch((error) => console.error("Error:", error));

//TASK9
const promise01 = new Promise((resolve) =>
  setTimeout(() => resolve("First Promise"), 3000)
);
const promise02 = new Promise((resolve) =>
  setTimeout(() => resolve("Second Promise"), 1000)
);
const promise03 = new Promise((resolve) =>
  setTimeout(() => resolve("Third Promise"), 2000)
);

Promise.race([promise01, promise02, promise03])
  .then((result) => {
    console.log("Resolved first:", result);
  })
  .catch((error) => console.error("Error:", error));
