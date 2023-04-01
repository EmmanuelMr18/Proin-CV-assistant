import { useEffect, useState } from 'react';
import { emptyuserData } from '../models/user';
const complexValues = [
  'languages',
  'skills',
  'achievements',
  'contacts',
  'education',
  'experience'
];
export function useUserData() {
  const [userData, setUserData] = useState(emptyuserData);
  useEffect(() => {
    const dataInLocalStorage = {
      userImg: localStorage.getItem('userImg') || emptyuserData.userImg,
      name: localStorage.getItem('name') || emptyuserData.name,
      job: localStorage.getItem('job') || emptyuserData.job,
      languages: JSON.parse(localStorage.getItem('languages')) || emptyuserData.languages,
      skills: JSON.parse(localStorage.getItem('skills')) || emptyuserData.skills,
      description: localStorage.getItem('description') || emptyuserData.description,
      achievements: JSON.parse(localStorage.getItem('achievements')) || emptyuserData.achievements,
      contacts: JSON.parse(localStorage.getItem('contacts')) || emptyuserData.contacts,
      education: JSON.parse(localStorage.getItem('education')) || emptyuserData.education,
      experience: JSON.parse(localStorage.getItem('experience')) || emptyuserData.experience
    };
    setUserData(dataInLocalStorage);
  }, []);
  function updateUserData(newData) {
    Object.entries(newData).forEach(([key, value]) => {
      if (complexValues.includes(key)) {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    });
    setUserData((prev) => ({ ...prev, ...newData }));
  }
  function deleteUserData() {
    setUserData(emptyuserData);
    localStorage.clear();
  }

  return { data: userData, update: updateUserData, delete: deleteUserData };
}
