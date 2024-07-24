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
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
fetchData();

//TASK8
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//TASK9
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
