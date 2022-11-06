import { useEffect, useState } from 'react';
import { emptyuserData } from '../models/user';

export function useUserData() {
  const [userData, setUserData] = useState(emptyuserData);
  useEffect(() => {
    const dataInLocalStorage = {
      userImg: localStorage.getItem('userImg') || '',
      name: localStorage.getItem('name') || '',
      job: localStorage.getItem('job') || '',
      languages: JSON.parse(localStorage.getItem('languages')) || [],
      skills: JSON.parse(localStorage.getItem('skills')) || [],
      description: localStorage.getItem('description') || '',
      achievements: JSON.parse(localStorage.getItem('achievements')) || [''],
      contacts: JSON.parse(localStorage.getItem('contacts')) || [''],
      education: JSON.parse(localStorage.getItem('education')) || [
        { institution: '', title: '', start: '', end: '' }
      ],
      experience: JSON.parse(localStorage.getItem('experience')) || [
        { company: '', job: '', start: '', end: '', description: '' }
      ]
    };
    setUserData(dataInLocalStorage);
  }, []);
  return userData;
}
