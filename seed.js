import { Trail, City, User } from './models'

const trails =[
    {
        "name": "Betasso Preserve",
        "summary": "A solid ride close to Boulder that is often ridden from town.",
        "difficulty": "greenBlue",
        "city": "Boulder", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
        "length": 7.4,
        "longitude": -105.3422,
        "latitude": 40.0155
    },
    {
        "name": "Centennial Cone",
        "summary": "One of the better beginner/intermediate rides in the front range.",
        "difficulty": "blue",
        "city": "Idaho Springs", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/31804/centennial-cone",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7029901_sqsmall_1555016067.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7029901_small_1555016067.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7029901_smallMed_1555016067.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7029901_medium_1555016067.jpg",
        "length": 17.2,
        "longitude": -105.371,
        "latitude": 39.7372
    },
    {
        "name": "Betasso Preserve",
        "summary": "A solid ride close to Boulder that is often ridden from town.",
        "difficulty": "greenBlue",
        "city": "Boulder", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
        "length": 7.4,
        "longitude": -105.3422,
        "latitude": 40.0155
    },
    {
        "name": "Apex Park Tour",
        "summary": "This technical front range ride is only possible on even numbered days but it's worth the planning!",
        "difficulty": "blueBlack",
        "city": "West Pleasant View", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/7000620/apex-park-tour",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7018020_sqsmall_1554917670.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7018020_small_1554917670.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7018020_smallMed_1554917670.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7018020_medium_1554917670.jpg",
        "length": 9.4,
        "longitude": -105.2097,
        "latitude": 39.7162
    },
    {
        "name": "Hall Ranch",
        "summary": "A favorite for Boulder area riders - scenery, singletrack, technical sections...  it's got it all!",
        "difficulty": "blueBlack",
        "city": "Lyons", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/43824/hall-ranch",
        "imgSqSmall": "https://img.youtube.com/vi/hI1RUEer4ng/hqdefault.jpg",
        "imgSmall": "https://img.youtube.com/vi/hI1RUEer4ng/hqdefault.jpg",
        "imgSmallMed": "https://img.youtube.com/vi/hI1RUEer4ng/hqdefault.jpg",
        "imgMedium": "https://img.youtube.com/vi/hI1RUEer4ng/hqdefault.jpg",
        "length": 11.8,
        "longitude": -105.2884,
        "latitude": 40.2106
    },
    {
        "name": "North Table Loop",
        "summary": "Big climbs. Rowdy descents. Amazing 360-degree views.",
        "difficulty": "blue",
        "city": "Golden", 
        "state": "Colorado",
        "url": "https://www.mtbproject.com/trail/5466724/north-table-loop",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7010776_sqsmall_1554838463.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7010776_small_1554838463.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7010776_smallMed_1554838463.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7010776_medium_1554838463.jpg",
        "length": 7.5,
        "longitude": -105.2301,
        "latitude": 39.7812
    },
    { 
        "name": "Big Creek Park",
        "summary": "A great urban trail system in the city of Roswell - a bike friendly community. Maintained by RAMBO.",
        "difficulty": "blue",
        "city": "Roswell", 
        "state": "Georgia",
        "url": "https://www.mtbproject.com/trail/4683982/big-creek-park",
        "imgSqSmall": "https://img.youtube.com/vi/Cew7xyEGJgs/hqdefault.jpg",
        "imgSmall": "https://img.youtube.com/vi/Cew7xyEGJgs/hqdefault.jpg",
        "imgSmallMed": "https://img.youtube.com/vi/Cew7xyEGJgs/hqdefault.jpg",
        "imgMedium": "https://img.youtube.com/vi/Cew7xyEGJgs/hqdefault.jpg",
        "length": 7.7,
        "longitude": -84.3122,
        "latitude": 34.0244
    },
    { 
        "name": "All-A-Toona Loop",
        "summary": "This route is great training for the annual All-A-Toona Race!",
        "difficulty": "blue",
        "city": "Acworth", 
        "state": "Georgia",
        "url": "https://www.mtbproject.com/trail/7021394/all-a-toona-loop",
        "imgSqSmall": "https://img.youtube.com/vi/w2IRwUYqqRs/hqdefault.jpg",
        "imgSmall": "https://img.youtube.com/vi/w2IRwUYqqRs/hqdefault.jpg",
        "imgSmallMed": "https://img.youtube.com/vi/w2IRwUYqqRs/hqdefault.jpg",
        "imgMedium": "https://img.youtube.com/vi/w2IRwUYqqRs/hqdefault.jpg",
        "length": 31.6,
        "longitude": -84.7181,
        "latitude": 34.0209
    },
    {  
        "name": "Dirty Sheets Gravel Loop",
        "summary": "This loop provides an escape from Atlanta traffic to grind some gravel!",
        "difficulty": "greenBlue",
        "city": "Chattahoochee Hills", 
        "state": "Georgia",
        "url": "https://www.mtbproject.com/trail/7012793/dirty-sheets-gravel-loop",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7009007_sqsmall_1554829898.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7009007_small_1554829898.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7009007_smallMed_1554829898.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7009007_medium_1554829898.jpg",
        "length": 20.7,
        "longitude": -84.7133,
        "latitude": 33.5713
    },
    { 
        "name": "Georgia International Horse Park",
        "summary": "A great trail set on the iconic site of the 1996 Olympic mountain bike race course.",
        "difficulty": "blue",
        "city": "Conyers", 
        "state": "Georgia",
        "url": "https://www.mtbproject.com/trail/7000133/georgia-international-horse-park",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7019803_sqsmall_1554925728.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7019803_small_1554925728.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7019803_smallMed_1554925728.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7019803_medium_1554925728.jpg",
        "length": 8.9,
        "longitude": -83.9422,
        "latitude": 33.6722
    },
    {   
        "name": "Mt. Tabor Park",
        "summary": "A tour of the stacked loop system on offer at Mt. Tabor Park.",
        "difficulty": "greenBlue",
        "city": "Hiram", 
        "state": "Georgia",
        "url": "https://www.mtbproject.com/trail/7000612/mt-tabor-park",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7005553_sqsmall_1554823711.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7005553_small_1554823711.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7005553_smallMed_1554823711.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7005553_medium_1554823711.jpg",
        "length": 4.7,
        "longitude": -84.7711,
        "latitude": 33.9464
    },
    {
        "name": "Cunningham Park",
        "summary": "Fast singletrack and dirt jumping awesomeness, ranging from absolute beginners to skilled XC/FR.",
        "difficulty": "blueBlack",
        "city": "Bellerose Terrace", 
        "state": "New York",
        "url": "https://www.mtbproject.com/trail/340491/cunningham-park",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/342625_sqsmall_1554220646.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/342625_small_1554220646.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/342625_smallMed_1554220646.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/342625_medium_1554220646.jpg",
        "length": 4.4,
        "longitude": -73.7652,
        "latitude": 40.7422
    },
    {
        "name": "Sprain Ridge Loop",
        "summary": "A great loop close to the city that includes technical climbs, rollers, drops, and descents.",
        "difficulty": "blueBlack",
        "city": "Ardsley", 
        "state": "New York",
        "url": "https://www.mtbproject.com/trail/7000490/sprain-ridge-loop",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7027367_sqsmall_1555010863.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7027367_small_1555010863.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7027367_smallMed_1555010863.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7027367_medium_1555010863.jpg",
        "length": 7.6,
        "longitude": -73.8492,
        "latitude": 40.9855
    },
    {    
        "name": "Frost Woods Park",
        "summary": "A good local ride, LOTS of small trails in a rather small area.",
        "difficulty": "greenBlue",
        "city": "Spotswood", 
        "state": "New Jersey",
        "url": "https://www.mtbproject.com/trail/7000959/frost-woods-park",
        "imgSqSmall": "",
        "imgSmall": "",
        "imgSmallMed": "",
        "imgMedium": "",
        "length": 5.2,
        "longitude": -74.3893,
        "latitude": 40.4086
    },
    { 
        "name": "Many Log Run",
        "type": "Trail",
        "summary": "Nice flowy section with log obstacles.",
        "difficulty": "blueBlack",   
        "city": "Navesink", 
        "state": "New Jersey",
        "url": "https://www.mtbproject.com/trail/7038214/many-log-run",
        "imgSqSmall": "",
        "imgSmall": "",
        "imgSmallMed": "",
        "imgMedium": "",
        "length": 1.3,
        "longitude": -74.0414,
        "latitude": 40.3876
    },
    {
        "name": "Green Apple",
        "type": "Trail",
        "summary": "Singletrack with some technical areas.",
        "difficulty": "blueBlack",                 
        "city": "Bellerose Terrace", 
        "state": "New York",
        "url": "https://www.mtbproject.com/trail/348093/green-apple",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/342625_sqsmall_1554220646.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/342625_small_1554220646.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/342625_smallMed_1554220646.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/342625_medium_1554220646.jpg",
        "length": 1,
        "longitude": -73.7708,
        "latitude": 40.74
    }
]

const cities = [
 {
	"name": "New York City",
	"state": "New York",
	"lat": 40.730610,
	"lon": -73.935242
},
{
	"name": "Atlanta",
	"state": "Georgia",
	"lat": 33.753746,
	"lon": -84.386330
},
{
	"name": "Boulder",
	"state": "Colorado",
	"lat": 	40.014984,
	"lon": -105.270546
}
]
const users = [
    {
    "firstName": "john",
    "lastName": "smith",
    "alias": "JayWalker"
    }
]
const seedTables = () => {
    cities.forEach(async city => await City.create(city))
    trails.forEach(async trail => await Trail.create(trail))
    users.forEach(async user => await User.create(user))
}
seedTables()