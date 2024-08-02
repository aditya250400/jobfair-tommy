function calculateAge(birthDate: string) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    
    // Adjust age if the current month is before the birth month or it's the birth month but the current day is before the birth day
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return age;
}

export default calculateAge
  