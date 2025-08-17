import UserImg from '../../assets/images/user.png'


const UserInfo = () => {
    return (
        <div className={'user-info'}>
            <img
                src={UserImg}
                alt={'User avatar'}/>
            <div>
                <span>Maxsim Dobrovolskyi</span>
                <p>Developer</p>
            </div>
        </div>
    );
};

export default UserInfo;