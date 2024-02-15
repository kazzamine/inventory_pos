import {changePassword} from "../admin/users";

const changepwd=$('#change_password')
const newpwd=$('#newPassword')
const confirmpwd=$('#confirmPassword')
const csrdToken=$('#_csrf_token_pwd')
changepwd.on('click',()=>{
    const data={
        'userId':changepwd.data('userId'),
        'newPwd':newpwd.val()
    }
    changepwd('/user/profile/changepsd',data,csrdToken.val())
})