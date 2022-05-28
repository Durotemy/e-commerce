import User from "../models/userModel.js";
import generateTokens from "../utils/generateTokens.js"

export const authUser = async (req, res) => {
    try {
        const { email, password, fullname } = req.body
        const user = await User.findOne({ email })
        if (user) {

            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateTokens(user._id)
            })
            return
        }

        res.json({

            msg: 'invalid credential'
        })
        return
    } catch (error) {
        res.send(`error occured somewhere`)
    }
};
export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
        return
    }
    else {
        throw new Error(`user not found`)
    }
};
export const registerUser = async (req, res) => {

    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })
    try {
        // if (userExists === '') {
        //     res.status(400).send(`no parameter was provided`)
        // }
        if (userExists) {
           
            res.status(400).send(`user ${name} already exists`)
            return
        }
        const user = await new User({
            name: name,
            email: email,
            password: password
        })
        user.save()
        if (user) {
            
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateTokens(user._id)
            })
            return
        }
        else {
            res.status(400).send("error occured while creating user")
        }
    } catch (error) {
        console.log(error)
    }


}