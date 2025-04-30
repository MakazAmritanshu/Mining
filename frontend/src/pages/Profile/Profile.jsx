import React, { useContext } from 'react';
import { UserDataContext } from '../../Context/UserContext';
import BalanceCard from '../../components/BalanceCard';
import History from '../../components/History';
import Services from '../../components/Services';
import Logout from '../../components/Logout';
import ProfileBalance from '../../components/ProfileBalance';

function Profile() {
  const { user } = useContext(UserDataContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex justify-between m-4'>
        <div className='rounded-full bg-[#13B8A7] w-20 h-20 flex justify-center items-center'>MyPic</div>
        <div className="flex flex-col items-start mt-4">
          <h1 className="text-xl font-bold">+91 {user.mobileNumber}</h1>
          <h3 className="text-[#13B8A7]">#{user._id}</h3>
        </div>
      </div>
      <ProfileBalance />
      <History />
      <Services />
      <Logout title="Log out" />
    </div>
  );
}

export default Profile;
