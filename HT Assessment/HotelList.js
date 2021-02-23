var myArray = [
    {'name':'Hotel City Park', 'rating':'4.0', 'description':'Great for visitors : Lively residential district with green spaces, Dilli Haat crafts bazaar, casual eateries & malls.'},
    {'name':'Park Ascent', 'rating':'4.2', 'description':'Fronted by a tiled courtyard, this sophisticated hotel in north Noida is 12 km from the Swaminarayan Akshardham Hindu temple and 19 km from the 17th-century Red Fort'},
    {'name':'Four Seasons Hotel Mumbai', 'rating':'4.4', 'description':'Swanky area with sea views from a sculpture-lined promenade, plus old-world Worli Village.'},
    {'name':'The Park Hotel Navi Mumbai', 'rating':'4.1', 'description':'Administrative district with office & apartment blocks, diverse restaurants & tranquil Mango Garden.'},
    {'name':'Hotel Heritage Residency', 'rating':'4.2', 'description':'Based on sightseeing, recreation, and getting around'},
    {'name':'Cibo Escape Resort', 'rating':'4.0', 'description':'On 35 wooded acres along the River Bhatsa, this down-to-earth resort is 6 km from Asangaon train station, 8 km from the Manas Mandir Jain Temple and 10 km from trekking and rock climbing at Fort Bhandargad Mahuli.'},
    {'name':'The Gateway Hotel Ambad Nashik', 'rating':'4.5', 'description':'Set on landscaped lawns, this upscale hotel is 3 km from the ancient Pandavleni Caves and 7 km from Nashik city centre.'},
    {'name':'Hotel Jain Palace', 'rating':'3.7', 'description':'Based on sightseeing, recreation, and getting around'},
    {'name':'Hotel Silver Palace', 'rating':'4.0', 'description':'A 2-minute walk from Jalgaon Junction train station, this relaxed hotel next to shops and restaurants is 1 km from the Mahatma Gandhi Garden, and 8 minutes on foot from the Icchapurti Ganesh Mandir temple.'},
    {'name':'Jehan Numa Palace Hotel', 'rating':'4.5', 'description':'Verdant area with bike paths & animals in Van Vihar National Park, plus anthropology museums.'},
    {'name':'Le Méridien Jaipur Resort & Spa', 'rating':'4.5', 'description':'Off the NH11C, this palatial hotel in a refined, Indo-Islamic–style building is 8 km from Amer Fort and 16 km from City Palace.'},
    {'name':'Crowne Plaza Greater Noida', 'rating':'4.4', 'description':'This polished hotel is 9 km from City Park and 4 km from the Surajpur Wetland nature preserve.'},
    {'name':'Hotel New Asian', 'rating':'3.8', 'description':'Leafy area with an old Golghar granary, Shrikrishna Science Centre & Chandani Radmade Sope museum.'},
    {'name':'Blue Diamond The Hotel', 'rating':'3.9', 'description':'In a commercial area along the NH149B, this unpretentious budget hotel is 3 km from both Korba railway station and the Hasdeo River.'},
    {'name':'Hotel Sai Palace', 'rating':'4.2', 'description':'Based on sightseeing, recreation, and getting around.'},
    {'name':'The Leela Palace Bengaluru, A Contemporary Luxury Hotel', 'rating':'4.6', 'description':'This ritzy hotel is an 11-minute walk from the KGA Golf Course and 3.5 km from HAL Bangalore International Airport.'},
    {'name':'Hotel Mahalakshmi Residency', 'rating':'4.5', 'description':'This straightforward hotel opposite Sri Mookambika Temple is 23 km from Mookambika Wildlife Sanctuary and an 8-minute walk from Kollur Bus Station.'},
    {'name':'The LaLiT Golf & Spa Resort Goa', 'rating':'4.4', 'description':'Quiet South Goa area with beaches such as Patnem & rustic lodging, plus dining at sea-view shacks.'},
    {'name':'Sayaji Hotel, Kolhapur', 'rating':'4.5', 'description':'Situated 3 km from both Mahalakshmi Temple and Dream World Water Park, this upscale hotel adjacent to DYP City Mall is 4 km from the New Palace Museum and Zoo.'},
    {'name':'Hotel Maniprabha', 'rating':'3.8', 'description':'Based on sightseeing, recreation, and getting around.'}
]

$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log('Value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
})

$('th').on('click', function () {
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)
    if(order == 'desc') {
        $(this).data('order', "asc")
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    } else {
        $(this).data('order', "desc")
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'
    }
    $(this).html(text)
    buildTable(myArray)
})

buildTable(myArray)

function searchTable(value, data) {
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()
        if (name.includes(value)) {
            filteredData.push(data[i])
        }
    }

    return filteredData
}

function buildTable(data) {
    var table = document.getElementById('myTable')

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].rating}</td>
            <td>${data[i].description}</td>
        </tr>`
        table.innerHTML += row
    }
}