import UserImg from '../../assets/images/user.png'


const UserInfo = () => {
    return (
        <div className={'flex gap-2'}>
            <img
                width={'50px'}
                height={'50px'}
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