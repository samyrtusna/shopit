import { sign } from "jsonwebtoken";

function createToken(user) {
  const payload = {
    user: {
      id: user.id,
      role: user.role,
    },
  };
  return sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" });
}

export default createToken;
