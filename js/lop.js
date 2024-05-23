async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/lop');
        const data = await response.json();
        const dataDiv = document.getElementById('lop');
        data.forEach((item,index) => {
            dataDiv.innerHTML += `
         <tr>
            <td>${index +1}</td>
            <td>${item.MAMH}</td>
            <td>${item.TENMH}</td>
            <td>${item.SOTC}</td>
            <td>csdvc</td>    
         </tr>
            
            `
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();