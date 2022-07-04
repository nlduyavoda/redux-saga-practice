export const getPosts = async () => {
  try {
    return await fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    console.log("fetch fail");
  }
};

export const fakeCallApi = async () => {
  console.log("[API START]");
  const apiCallingPromise = new Promise((resolve) => {
    resolve("api is called");
  });

  await apiCallingPromise.then(async (res) => {
    const logger_response = await logger(res, 2000);
    console.log("logger_response", logger_response);
    return logger_response;
  });
};

export const logger = async (text, time) => {
  const result = await setTimeout(() => {
    const emptyData = { data: [] };
    return emptyData;
  }, time);
  return result;
};
