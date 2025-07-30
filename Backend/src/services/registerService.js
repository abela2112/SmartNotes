import admin from "../config/firebase.js";



export const createUser = async ({email, password}) => {
 
  try {
   
    const user = await admin.auth().createUser({
      email,
      password,
    });
    console.log("user created:", user);
    return user;
   
  } catch (error) {
    console.log(error)
    return false;
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await admin.auth().getUserByEmail(email);
  } catch (error) {
    console.log(error)
  }
};
