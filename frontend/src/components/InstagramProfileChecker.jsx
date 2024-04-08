import React, { useState } from 'react';
import axios from 'axios';

const InstagramProfileChecker = () => {
  const [profileData, setProfileData] = useState({
    userFollowerCount: 0,
    userFollowingCount: 0,
    userBiographyLength: 0,
    userMediaCount: 0,
    userHasProfilPic: 0,
    userIsPrivate: 0,
    usernameDigitCount: 0,
    usernameLength: 0
  });

  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({ ...prevState, [name]: parseInt(value) || 0 }));

  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', profileData);
      if (response.data && response.data.prediction !== undefined) {
        console.log(response.data.prediction); // Log the prediction data
        const myArray = [1];

        setPrediction(JSON.stringify(response.data.prediction) === JSON.stringify(myArray) ? "fake" : "real");
        
      } else {
        console.error('Prediction data is undefined');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div  className="p-6 max-w-md mx-auto bg-gradient-to-r from-blue-300 to-green-300 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-white">Instagram Profile Checker</h2>
      <form  className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          User Follower Count:
          <input type="number"  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"  name="userFollowerCount" value={profileData.userFollowerCount} onChange={handleInputChange} />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          User Following Count:
          <input type="number"  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" name="userFollowingCount" value={profileData.userFollowingCount} onChange={handleInputChange} />
        </label >
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          User Biography Length:
          <input type="number"  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" name="userBiographyLength" value={profileData.userBiographyLength} onChange={handleInputChange} />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          User Media Count:
          <input type="number"  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" name="userMediaCount" value={profileData.userMediaCount} onChange={handleInputChange} />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          User Has Profile Picture:
          <select name="userHasProfilPic" value={profileData.userHasProfilPic} onChange={handleInputChange}  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          User Is Private:
          <select name="userIsPrivate" value={profileData.userIsPrivate} onChange={handleInputChange}>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          Username Digit Count:
          <input type="number" name="usernameDigitCount" value={profileData.usernameDigitCount} onChange={handleInputChange}  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2"> 
          Username Length:
          <input type="number"  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" name="usernameLength" value={profileData.usernameLength} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Check Profile</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default InstagramProfileChecker;
