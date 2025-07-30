import { getUserByEmail, createUser } from "../services/registerService.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  // check if the user already exists
  const userExists = await getUserByEmail(email);
  if (userExists) {
    return res.status(400).json({ 
      message: "User already exists"
    });
  } else{
    try {
      const userData = req.body;
      const user = await createUser(userData);
      console.log("user created:", user);
     if (!user) {
        return res.status(400).json({ 
          message: "User creation failed" 
        });
      } else {
        return res.status(200).json({ 
          message: "User successfully created", 
          status: "success"
        });
      }

    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      });
    }
  }

}