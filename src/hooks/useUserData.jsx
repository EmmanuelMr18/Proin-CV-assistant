import { useEffect, useState } from 'react';
import { emptyuserData } from '../models/user';

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
    setUserData((prev) => ({ ...prev, ...newData }));
  }

  return { data: userData, update: updateUserData };
}
