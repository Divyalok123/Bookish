const User = require('../models/user');
const Book = require('../models/book');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

module.exports.updateProfile = async (req, res) => {
    const userId = req.user.id;
    let user = await User.findById(userId);
    
    let check = false;
    User.multerUpload(req, res, (err) => {
        if(err) {
            if(err instanceof multer.MulterError) {
                console.log('Multer Error: ', err);
            } else
                console.log('Multer Error__: ', err);
            res.json({
                status: "error",
                message: "File Upload Error!"
            });
            return;
        }

        if(req.file) {
            if(user.avatar) {
                console.log('here');
                let prevavatarpath = path.join(__dirname, '..', user.avatar);
                
                if(fs.existsSync(prevavatarpath)) { // check if the path exists
                    fs.unlink(prevavatarpath, (err) => {
                            if(err)  {
                                console.log('err: ', err);
                                res.json({
                                    status: "error",
                                    message: "Error occured!"
                                })
                                return;
                            }
                            console.log('Deleted previous file');
                        }
                    )
                }
            }

            user.avatar = User.avatarPath + '/' + req.file.filename;
            check = true;
        }

        let data = req.body;
        if(data.firstname) {
            user.firstname = data.firstname;
            check = true;
        }
    
        if(data.lastname) {
            user.lastname = data.lastname;
            check = true;
        }
    
        if(data.about) {
            user.about = data.about;
            check = true;
        }
    
        if(data.title) {
            user.title = data.title;
            check = true;
        }
    
        if(data.genre) {
            user.likes = data.genre;
            check = true;
        }
        
        if(data.linkedin) {
            user.otherprofiles['linkedin'] = data.linkedin;
            check = true;
        }

        if(data.instagram) {
            user.otherprofiles['instagram'] = data.instagram;
            check = true;
        }

        if(data.facebook) {
            user.otherprofiles['facebook'] = data.facebook;
            check = true;
        }

        if(!check) {
            res.json({
                status: "error",
                message: "No input provided"
            })
            return;
        }
    
        user.save();
        res.json({
            status: "success",
            message: "Sucessfully updated profile!",
            user
        });
    })
}