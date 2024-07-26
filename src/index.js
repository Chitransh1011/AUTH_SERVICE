const express = require('express')
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const db = require('./models/index');
const {User,Role} = require('./models/index');
// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api',apiRoutes);
    // const UserRepository = require('./repository/user-repository');
    // const UserService = require('./services/user-service');
    app.listen(PORT,async () => {
        console.log(`Server Started on Port: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alert : true})
        }

        // const u1 = await User.findByPk(2);
        // const r1 = await Role.findByPk(3);
        // u1.addRole(r1);
        // const response = await u1.getRoles();
        // const response = await u1.hasRole(r1);
        // console.log(response);

        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
         // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com', id: 1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjcxNjM1MTgxLCJleHAiOjE2NzE2MzUyMTF9.vuo6QmYm6TmL2P2rBXoNDbPi1st5ZVrK4Yf2Jz-Dpzs';
        // const response = service.verifyToken(token);
    });
}   

prepareAndStartServer();