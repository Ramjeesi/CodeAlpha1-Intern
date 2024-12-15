// script.js
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are zero-indexed
    const year = parseInt(document.getElementById('year').value);
  
    const today = new Date();
    const birthDate = new Date(year, month, day);
  
    if (birthDate > today) {
      document.getElementById('result').textContent = "Invalid date! Birth date can't be in the future.";
      return;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById('result').textContent = `You are ${age} years old.`;
  }