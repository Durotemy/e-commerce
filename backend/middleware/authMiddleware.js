import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";
export const protect = async (req, res, next) => {
    try {
        let token
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            try {
                token = req.headers.authorization.split(' ')[1]
                console.log("token", token)
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log(decoded);
                req.user = await User.findById(decoded.id).select("-password");
                console.log(req.user)
                next()
            } catch (error) {
                res.status(404)
                throw new Error("not authorization token failde")
            }
        }
        if (!token) {
            res.status(404).send('unauthorized');
        }

    } catch (error) {
        res.send("error here")
        console.log(error)
    }
}

// export  { protect }


