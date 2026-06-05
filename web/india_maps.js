// ============================================================
// India State-wise Road Networks — All 28 States + Major UTs
// Coordinates: X=1+(lon-68)/29*8, Y=1+(lat-8)/29*8
// ============================================================
const INDIA_STATE_MAPS = {

"andhra_pradesh":{ stateName:"Andhra Pradesh 🦚", nodes:{
  "Visakhapatnam":{x:5.21,y:4.38,description:"Major port & IT hub (Vizag). NH-16."},
  "Vijayawada":   {x:4.47,y:3.83,description:"Commercial capital. NH-16 junction."},
  "Guntur":       {x:4.40,y:3.72,description:"Chilli & cotton trade center."},
  "Tirupati":     {x:4.24,y:2.81,description:"Temple city. Venkateswara Swamy."},
  "Kurnool":      {x:4.00,y:3.31,description:"Former capital of AP."},
  "Rajahmundry":  {x:4.76,y:4.09,description:"Cultural capital on Godavari."},
  "Nellore":      {x:4.36,y:3.16,description:"Aquaculture & rice hub."},
  "Kadapa":       {x:4.12,y:3.15,description:"Cement & limestone industry."},
  "Anantapur":    {x:3.87,y:3.17,description:"Groundnut & solar energy hub."},
  "Kakinada":     {x:4.85,y:4.09,description:"Petroleum refinery & port."},
  "Ongole":       {x:4.38,y:3.38,description:"Ongole cattle breed origin."},
  "Srikakulam":   {x:5.17,y:4.53,description:"Northeastern coastal city."}
}, edges:[
  {from:"Visakhapatnam",to:"Rajahmundry",distance:200,speedLimit:80,trafficFactor:1.2},
  {from:"Rajahmundry",  to:"Kakinada",   distance:55, speedLimit:60,trafficFactor:1.3},
  {from:"Rajahmundry",  to:"Vijayawada", distance:145,speedLimit:80,trafficFactor:1.2},
  {from:"Vijayawada",   to:"Guntur",     distance:33, speedLimit:60,trafficFactor:1.5},
  {from:"Guntur",       to:"Ongole",     distance:102,speedLimit:70,trafficFactor:1.2},
  {from:"Ongole",       to:"Nellore",    distance:155,speedLimit:70,trafficFactor:1.2},
  {from:"Nellore",      to:"Tirupati",   distance:145,speedLimit:80,trafficFactor:1.2},
  {from:"Kurnool",      to:"Kadapa",     distance:132,speedLimit:70,trafficFactor:1.1},
  {from:"Kadapa",       to:"Tirupati",   distance:147,speedLimit:70,trafficFactor:1.2},
  {from:"Anantapur",    to:"Kurnool",    distance:105,speedLimit:70,trafficFactor:1.1},
  {from:"Guntur",       to:"Kurnool",    distance:230,speedLimit:80,trafficFactor:1.2},
  {from:"Visakhapatnam",to:"Srikakulam", distance:120,speedLimit:70,trafficFactor:1.2}
]},

"arunachal_pradesh":{ stateName:"Arunachal Pradesh 🏔️", nodes:{
  "Itanagar":   {x:8.07,y:6.27,description:"State capital. Gateway city."},
  "Naharlagun": {x:8.09,y:6.25,description:"Twin city of Itanagar."},
  "Pasighat":   {x:8.37,y:6.19,description:"Oldest town. Siang river."},
  "Bomdila":    {x:7.81,y:6.52,description:"Gateway to Tawang. Buddhist."},
  "Tawang":     {x:7.49,y:6.86,description:"Monastery town near China."},
  "Along":      {x:8.20,y:6.31,description:"West Siang commercial hub."},
  "Ziro":       {x:7.96,y:6.43,description:"UNESCO heritage. Apatani tribe."},
  "Tezu":       {x:8.69,y:6.36,description:"Lohit district headquarters."}
}, edges:[
  {from:"Itanagar",  to:"Naharlagun",distance:10, speedLimit:40,trafficFactor:1.5},
  {from:"Itanagar",  to:"Ziro",      distance:168,speedLimit:35,trafficFactor:1.6},
  {from:"Naharlagun",to:"Bomdila",   distance:320,speedLimit:35,trafficFactor:1.6},
  {from:"Bomdila",   to:"Tawang",    distance:178,speedLimit:30,trafficFactor:1.8},
  {from:"Itanagar",  to:"Pasighat",  distance:360,speedLimit:35,trafficFactor:1.6},
  {from:"Pasighat",  to:"Along",     distance:100,speedLimit:40,trafficFactor:1.5},
  {from:"Pasighat",  to:"Tezu",      distance:300,speedLimit:35,trafficFactor:1.6}
]},

"assam":{ stateName:"Assam 🌿", nodes:{
  "Guwahati":   {x:7.55,y:6.01,description:"Gateway to Northeast India."},
  "Dibrugarh":  {x:8.47,y:6.36,description:"Tea city. Northeast gateway."},
  "Jorhat":     {x:8.28,y:6.20,description:"Tea capital of Assam."},
  "Silchar":    {x:7.65,y:5.39,description:"Major city in Barak Valley."},
  "Tezpur":     {x:7.87,y:6.35,description:"Cultural city on Brahmaputra."},
  "Nagaon":     {x:7.85,y:6.10,description:"Central Assam commercial hub."},
  "Tinsukia":   {x:8.57,y:6.41,description:"Oil & tea industry center."},
  "Bongaigaon": {x:7.38,y:6.12,description:"Petrochemical industry hub."},
  "Dhubri":     {x:7.25,y:6.05,description:"Border city near Bangladesh."},
  "Karimganj":  {x:7.61,y:5.28,description:"Southern Assam border town."}
}, edges:[
  {from:"Guwahati",  to:"Bongaigaon",distance:196,speedLimit:70,trafficFactor:1.2},
  {from:"Guwahati",  to:"Nagaon",    distance:122,speedLimit:80,trafficFactor:1.2},
  {from:"Guwahati",  to:"Tezpur",    distance:180,speedLimit:70,trafficFactor:1.2},
  {from:"Nagaon",    to:"Jorhat",    distance:152,speedLimit:70,trafficFactor:1.2},
  {from:"Jorhat",    to:"Dibrugarh", distance:91, speedLimit:70,trafficFactor:1.2},
  {from:"Dibrugarh", to:"Tinsukia",  distance:47, speedLimit:60,trafficFactor:1.2},
  {from:"Bongaigaon",to:"Dhubri",    distance:130,speedLimit:60,trafficFactor:1.2},
  {from:"Silchar",   to:"Karimganj", distance:63, speedLimit:60,trafficFactor:1.2},
  {from:"Tezpur",    to:"Jorhat",    distance:193,speedLimit:70,trafficFactor:1.2}
]},

"bihar":{ stateName:"Bihar 🏛️", nodes:{
  "Patna":       {x:5.73,y:5.86,description:"Capital. Ancient Pataliputra."},
  "Gaya":        {x:5.60,y:5.67,description:"Buddhist pilgrimage. Bodh Gaya."},
  "Bhagalpur":   {x:6.02,y:5.91,description:"Silk city on the Ganges."},
  "Muzaffarpur": {x:5.68,y:6.11,description:"Litchi capital of India."},
  "Darbhanga":   {x:5.79,y:6.20,description:"Cultural capital of Mithila."},
  "Purnia":      {x:6.09,y:6.22,description:"Northeast Bihar gateway."},
  "Arrah":       {x:5.58,y:5.83,description:"Historical city on Ganges."},
  "Begusarai":   {x:5.86,y:5.97,description:"Petrochemical industrial hub."},
  "Chapra":      {x:5.60,y:5.97,description:"Historical town on Ghaghra."},
  "Sasaram":     {x:5.51,y:5.71,description:"Sher Shah Suri tomb city."},
  "Nalanda":     {x:5.71,y:5.75,description:"Ancient university ruins."},
  "Hajipur":     {x:5.70,y:5.97,description:"Banana hub. Near Patna."}
}, edges:[
  {from:"Patna",      to:"Hajipur",    distance:15, speedLimit:60,trafficFactor:1.8},
  {from:"Patna",      to:"Chapra",     distance:55, speedLimit:70,trafficFactor:1.3},
  {from:"Patna",      to:"Arrah",      distance:60, speedLimit:70,trafficFactor:1.3},
  {from:"Patna",      to:"Nalanda",    distance:89, speedLimit:70,trafficFactor:1.2},
  {from:"Patna",      to:"Muzaffarpur",distance:75, speedLimit:80,trafficFactor:1.2},
  {from:"Patna",      to:"Begusarai",  distance:120,speedLimit:70,trafficFactor:1.2},
  {from:"Nalanda",    to:"Gaya",       distance:95, speedLimit:70,trafficFactor:1.2},
  {from:"Gaya",       to:"Sasaram",    distance:111,speedLimit:70,trafficFactor:1.2},
  {from:"Muzaffarpur",to:"Darbhanga",  distance:47, speedLimit:70,trafficFactor:1.3},
  {from:"Darbhanga",  to:"Purnia",     distance:178,speedLimit:70,trafficFactor:1.2},
  {from:"Begusarai",  to:"Bhagalpur",  distance:145,speedLimit:70,trafficFactor:1.2},
  {from:"Purnia",     to:"Bhagalpur",  distance:143,speedLimit:70,trafficFactor:1.2}
]},

"chhattisgarh":{ stateName:"Chhattisgarh 🌾", nodes:{
  "Raipur":      {x:4.76,y:4.66,description:"Capital. Steel & power hub."},
  "Bhilai":      {x:4.71,y:4.64,description:"Steel city. Bhilai Steel Plant."},
  "Bilaspur":    {x:4.86,y:4.94,description:"Railway & coal hub."},
  "Durg":        {x:4.70,y:4.64,description:"Industrial twin of Bhilai."},
  "Korba":       {x:5.01,y:4.93,description:"Power city. Coal mines."},
  "Rajnandgaon": {x:4.61,y:4.74,description:"Agriculture & textile city."},
  "Jagdalpur":   {x:4.74,y:4.00,description:"Bastar HQ. Chitrakoot falls."},
  "Ambikapur":   {x:5.09,y:5.14,description:"Surguja district capital."},
  "Raigarh":     {x:5.14,y:4.97,description:"Steel & coal industry."}
}, edges:[
  {from:"Raipur",     to:"Durg",       distance:29, speedLimit:60,trafficFactor:1.8},
  {from:"Durg",       to:"Bhilai",     distance:8,  speedLimit:50,trafficFactor:2.0},
  {from:"Raipur",     to:"Bilaspur",   distance:113,speedLimit:80,trafficFactor:1.2},
  {from:"Raipur",     to:"Rajnandgaon",distance:73, speedLimit:70,trafficFactor:1.2},
  {from:"Bilaspur",   to:"Korba",      distance:75, speedLimit:70,trafficFactor:1.2},
  {from:"Bilaspur",   to:"Raigarh",    distance:127,speedLimit:70,trafficFactor:1.2},
  {from:"Bilaspur",   to:"Ambikapur",  distance:185,speedLimit:60,trafficFactor:1.3},
  {from:"Raipur",     to:"Jagdalpur",  distance:298,speedLimit:70,trafficFactor:1.3}
]},

"goa":{ stateName:"Goa 🏖️", nodes:{
  "Panaji":        {x:2.61,y:3.65,description:"State capital. Mandovi river."},
  "Margao":        {x:2.59,y:3.57,description:"Commercial hub of South Goa."},
  "Vasco da Gama": {x:2.57,y:3.60,description:"Largest city. Mormugao port."},
  "Mapusa":        {x:2.61,y:3.68,description:"North Goa commercial hub."},
  "Ponda":         {x:2.65,y:3.63,description:"Temples & spice plantations."},
  "Calangute":     {x:2.58,y:3.71,description:"Most popular beach resort."},
  "Valpoi":        {x:2.67,y:3.72,description:"Interior forest town."}
}, edges:[
  {from:"Panaji",       to:"Margao",       distance:33,speedLimit:60,trafficFactor:1.4},
  {from:"Panaji",       to:"Mapusa",       distance:13,speedLimit:50,trafficFactor:1.5},
  {from:"Panaji",       to:"Ponda",        distance:28,speedLimit:50,trafficFactor:1.4},
  {from:"Margao",       to:"Vasco da Gama",distance:30,speedLimit:50,trafficFactor:1.4},
  {from:"Mapusa",       to:"Calangute",    distance:10,speedLimit:40,trafficFactor:1.5},
  {from:"Mapusa",       to:"Valpoi",       distance:50,speedLimit:50,trafficFactor:1.3}
]},

"gujarat":{ stateName:"Gujarat 🏭", nodes:{
  "Ahmedabad":   {x:2.26,y:5.15,description:"Largest city. Financial capital."},
  "Surat":       {x:2.12,y:4.56,description:"Textile & diamond cutting hub."},
  "Vadodara":    {x:2.44,y:4.87,description:"Cultural capital of Gujarat."},
  "Rajkot":      {x:1.72,y:4.84,description:"Industrial city of Saurashtra."},
  "Gandhinagar": {x:2.27,y:5.20,description:"State capital. Smart city."},
  "Bhavnagar":   {x:2.00,y:4.68,description:"Ship breaking & port city."},
  "Jamnagar":    {x:1.47,y:4.86,description:"Brass parts & oil refinery."},
  "Junagadh":    {x:1.67,y:4.60,description:"Gir forest lion safari gate."},
  "Anand":       {x:2.37,y:4.92,description:"Amul dairy cooperative hub."},
  "Bharuch":     {x:2.22,y:4.73,description:"Petrochemical corridor city."},
  "Mehsana":     {x:2.27,y:5.36,description:"Dairy & tobacco trade center."},
  "Vapi":        {x:2.01,y:4.46,description:"Chemical & industrial estate."}
}, edges:[
  {from:"Ahmedabad", to:"Gandhinagar",distance:30, speedLimit:60,trafficFactor:1.8},
  {from:"Ahmedabad", to:"Anand",      distance:72, speedLimit:80,trafficFactor:1.3},
  {from:"Ahmedabad", to:"Mehsana",    distance:78, speedLimit:80,trafficFactor:1.2},
  {from:"Ahmedabad", to:"Rajkot",     distance:216,speedLimit:80,trafficFactor:1.2},
  {from:"Surat",     to:"Bharuch",    distance:82, speedLimit:80,trafficFactor:1.3},
  {from:"Surat",     to:"Vapi",       distance:115,speedLimit:80,trafficFactor:1.3},
  {from:"Bharuch",   to:"Vadodara",   distance:82, speedLimit:80,trafficFactor:1.3},
  {from:"Vadodara",  to:"Anand",      distance:48, speedLimit:70,trafficFactor:1.3},
  {from:"Rajkot",    to:"Jamnagar",   distance:90, speedLimit:80,trafficFactor:1.2},
  {from:"Rajkot",    to:"Bhavnagar",  distance:162,speedLimit:80,trafficFactor:1.2},
  {from:"Rajkot",    to:"Junagadh",   distance:103,speedLimit:80,trafficFactor:1.2}
]},


"haryana":{ stateName:"Haryana 🌾", nodes:{
  "Faridabad":  {x:3.15,y:6.57,description:"Largest city. Industrial hub."},
  "Gurgaon":    {x:3.10,y:6.57,description:"Millennium City. IT & finance."},
  "Panipat":    {x:3.08,y:6.80,description:"City of historical battles."},
  "Ambala":     {x:3.00,y:6.95,description:"Railway & military cantonment."},
  "Rohtak":     {x:2.96,y:6.69,description:"Trade & education city."},
  "Hisar":      {x:2.77,y:6.71,description:"Steel & agriculture city."},
  "Karnal":     {x:3.05,y:6.87,description:"Rice bowl of Haryana."},
  "Sonipat":    {x:3.11,y:6.71,description:"Industrial city near Delhi."},
  "Panchkula":  {x:3.04,y:6.97,description:"Satellite city of Chandigarh."},
  "Yamunanagar":{x:3.13,y:7.00,description:"Paper & steel industries."}
}, edges:[
  {from:"Gurgaon",  to:"Faridabad",  distance:32, speedLimit:60,trafficFactor:2.0},
  {from:"Gurgaon",  to:"Sonipat",    distance:60, speedLimit:70,trafficFactor:1.5},
  {from:"Sonipat",  to:"Panipat",    distance:47, speedLimit:80,trafficFactor:1.3},
  {from:"Panipat",  to:"Karnal",     distance:50, speedLimit:80,trafficFactor:1.2},
  {from:"Karnal",   to:"Ambala",     distance:84, speedLimit:80,trafficFactor:1.2},
  {from:"Ambala",   to:"Panchkula",  distance:22, speedLimit:60,trafficFactor:1.5},
  {from:"Ambala",   to:"Yamunanagar",distance:44, speedLimit:70,trafficFactor:1.3},
  {from:"Rohtak",   to:"Hisar",      distance:127,speedLimit:70,trafficFactor:1.2},
  {from:"Rohtak",   to:"Sonipat",    distance:53, speedLimit:70,trafficFactor:1.3}
]},

"himachal_pradesh":{ stateName:"Himachal Pradesh 🏔️", nodes:{
  "Shimla":     {x:3.53,y:7.37,description:"State capital. Queen of Hills."},
  "Dharamsala": {x:3.28,y:7.59,description:"Tibetan govt in exile. McLeod."},
  "Mandi":      {x:3.31,y:7.46,description:"Cultural capital. Shiva temples."},
  "Solan":      {x:3.48,y:7.26,description:"Mushroom city of India."},
  "Kullu":      {x:3.37,y:7.54,description:"Kullu Dussehra & valley tourism."},
  "Hamirpur":   {x:3.37,y:7.41,description:"Education hub of Himachal."},
  "Chamba":     {x:3.16,y:7.66,description:"Remote temple city in north."},
  "Una":        {x:3.35,y:7.25,description:"Gateway from Punjab to HP."},
  "Nahan":      {x:3.56,y:7.23,description:"Sirmaur district capital."},
  "Bilaspur":   {x:3.41,y:7.30,description:"Bhakra dam lake city."}
}, edges:[
  {from:"Shimla",    to:"Solan",     distance:46, speedLimit:40,trafficFactor:1.5},
  {from:"Shimla",    to:"Bilaspur",  distance:82, speedLimit:40,trafficFactor:1.4},
  {from:"Shimla",    to:"Mandi",     distance:156,speedLimit:40,trafficFactor:1.5},
  {from:"Mandi",     to:"Kullu",     distance:70, speedLimit:40,trafficFactor:1.5},
  {from:"Mandi",     to:"Hamirpur",  distance:65, speedLimit:45,trafficFactor:1.4},
  {from:"Mandi",     to:"Dharamsala",distance:120,speedLimit:40,trafficFactor:1.5},
  {from:"Dharamsala",to:"Chamba",    distance:120,speedLimit:35,trafficFactor:1.6},
  {from:"Una",       to:"Hamirpur",  distance:65, speedLimit:50,trafficFactor:1.3},
  {from:"Solan",     to:"Una",       distance:76, speedLimit:45,trafficFactor:1.3},
  {from:"Bilaspur",  to:"Hamirpur",  distance:50, speedLimit:45,trafficFactor:1.4}
]},

"jharkhand":{ stateName:"Jharkhand ⛏️", nodes:{
  "Ranchi":     {x:5.78,y:5.24,description:"State capital. Jharkhand HQ."},
  "Jamshedpur": {x:6.01,y:5.05,description:"Steel city. Tata Steel plant."},
  "Dhanbad":    {x:5.98,y:5.35,description:"Coal capital of India."},
  "Bokaro":     {x:5.90,y:5.29,description:"Steel city. SAIL steel plant."},
  "Hazaribagh": {x:5.84,y:5.38,description:"National park & clean city."},
  "Deoghar":    {x:6.03,y:5.47,description:"Baidyanath Dham pilgrimage."},
  "Dumka":      {x:6.09,y:5.47,description:"Santhal Pargana divisional HQ."},
  "Giridih":    {x:5.95,y:5.41,description:"Mica & mining town."},
  "Chaibasa":   {x:5.84,y:5.05,description:"West Singhbhum tribal region."}
}, edges:[
  {from:"Ranchi",    to:"Jamshedpur", distance:132,speedLimit:70,trafficFactor:1.2},
  {from:"Ranchi",    to:"Hazaribagh", distance:97, speedLimit:70,trafficFactor:1.2},
  {from:"Ranchi",    to:"Bokaro",     distance:100,speedLimit:70,trafficFactor:1.2},
  {from:"Dhanbad",   to:"Bokaro",     distance:48, speedLimit:60,trafficFactor:1.3},
  {from:"Dhanbad",   to:"Giridih",    distance:80, speedLimit:60,trafficFactor:1.3},
  {from:"Dhanbad",   to:"Deoghar",    distance:108,speedLimit:60,trafficFactor:1.3},
  {from:"Deoghar",   to:"Dumka",      distance:67, speedLimit:60,trafficFactor:1.3},
  {from:"Jamshedpur",to:"Chaibasa",   distance:85, speedLimit:60,trafficFactor:1.3},
  {from:"Hazaribagh",to:"Giridih",    distance:50, speedLimit:60,trafficFactor:1.2}
]},

"karnataka":{ stateName:"Karnataka 🌴", nodes:{
  "Bengaluru":  {x:3.65,y:2.37,description:"Silicon Valley of India. IT hub."},
  "Mysuru":     {x:3.43,y:2.14,description:"City of Palaces. Tourism hub."},
  "Mangaluru":  {x:3.00,y:2.24,description:"Port city. Coffee exports."},
  "Hubballi":   {x:3.05,y:3.04,description:"Commercial hub of North Karnataka."},
  "Belagavi":   {x:2.88,y:3.29,description:"Border city. Textile industry."},
  "Kalaburagi": {x:3.71,y:3.20,description:"Bidar district border city."},
  "Ballari":    {x:3.55,y:2.82,description:"Iron ore & steel mining hub."},
  "Shivamogga": {x:3.23,y:2.59,description:"Gateway to Western Ghats."},
  "Tumakuru":   {x:3.50,y:2.48,description:"Near Bengaluru. Industrial hub."},
  "Davanagere": {x:3.28,y:2.74,description:"Cotton & textile city."},
  "Vijayapura": {x:3.26,y:3.13,description:"Bijapur. Historic sultanate city."},
  "Udupi":      {x:2.95,y:2.27,description:"Temple city & education hub."}
}, edges:[
  {from:"Bengaluru", to:"Mysuru",    distance:145,speedLimit:100,trafficFactor:1.2},
  {from:"Bengaluru", to:"Tumakuru",  distance:72, speedLimit:80, trafficFactor:1.3},
  {from:"Tumakuru",  to:"Davanagere",distance:166,speedLimit:80, trafficFactor:1.2},
  {from:"Davanagere",to:"Shivamogga",distance:93, speedLimit:70, trafficFactor:1.2},
  {from:"Davanagere",to:"Hubballi",  distance:97, speedLimit:80, trafficFactor:1.2},
  {from:"Hubballi",  to:"Belagavi",  distance:98, speedLimit:80, trafficFactor:1.2},
  {from:"Belagavi",  to:"Vijayapura",distance:200,speedLimit:80, trafficFactor:1.2},
  {from:"Vijayapura",to:"Kalaburagi",distance:200,speedLimit:80, trafficFactor:1.2},
  {from:"Kalaburagi",to:"Ballari",   distance:200,speedLimit:70, trafficFactor:1.2},
  {from:"Ballari",   to:"Bengaluru", distance:310,speedLimit:80, trafficFactor:1.2},
  {from:"Mysuru",    to:"Mangaluru", distance:253,speedLimit:70, trafficFactor:1.3},
  {from:"Mangaluru", to:"Udupi",     distance:58, speedLimit:60, trafficFactor:1.3}
]},


"kerala":{ stateName:"Kerala 🌴", nodes:{
  "Thiruvananthapuram":{x:3.47,y:1.14,description:"State capital. Trivandrum."},
  "Kochi":       {x:3.34,y:1.60,description:"Financial capital. Port city."},
  "Kozhikode":   {x:3.20,y:2.01,description:"Calicut. Spice trade history."},
  "Thrissur":    {x:3.30,y:1.72,description:"Cultural capital of Kerala."},
  "Kannur":      {x:3.15,y:2.13,description:"Handloom & tourism city."},
  "Kollam":      {x:3.43,y:1.34,description:"Cashew exports. Backwaters."},
  "Palakkad":    {x:3.29,y:1.82,description:"Gateway to Tamil Nadu."},
  "Alappuzha":   {x:3.32,y:1.51,description:"Venice of the East. Backwaters."},
  "Malappuram":  {x:3.22,y:1.93,description:"Educational hub. NH-66."},
  "Kottayam":    {x:3.36,y:1.54,description:"Rubber & publishing hub."}
}, edges:[
  {from:"Thiruvananthapuram",to:"Kollam",    distance:71, speedLimit:70,trafficFactor:1.3},
  {from:"Kollam",    to:"Alappuzha",  distance:75, speedLimit:70,trafficFactor:1.3},
  {from:"Alappuzha", to:"Kochi",      distance:62, speedLimit:70,trafficFactor:1.4},
  {from:"Kochi",     to:"Thrissur",   distance:79, speedLimit:80,trafficFactor:1.3},
  {from:"Thrissur",  to:"Palakkad",   distance:76, speedLimit:70,trafficFactor:1.2},
  {from:"Thrissur",  to:"Malappuram", distance:69, speedLimit:70,trafficFactor:1.2},
  {from:"Malappuram",to:"Kozhikode",  distance:52, speedLimit:70,trafficFactor:1.3},
  {from:"Kozhikode", to:"Kannur",     distance:92, speedLimit:70,trafficFactor:1.2},
  {from:"Kochi",     to:"Kottayam",   distance:72, speedLimit:70,trafficFactor:1.3}
]},

"madhya_pradesh":{ stateName:"Madhya Pradesh 🐯", nodes:{
  "Bhopal":      {x:3.60,y:5.21,description:"State capital. City of lakes."},
  "Indore":      {x:3.27,y:4.96,description:"Commercial capital of MP."},
  "Jabalpur":    {x:4.11,y:5.06,description:"Marble rocks. Narmada origin."},
  "Gwalior":     {x:3.60,y:5.82,description:"Historical fort city."},
  "Ujjain":      {x:3.27,y:5.06,description:"Kumbh Mela city. Mahakal."},
  "Sagar":       {x:3.78,y:5.28,description:"Central India education hub."},
  "Rewa":        {x:4.35,y:5.29,description:"White tigers & power plants."},
  "Satna":       {x:4.27,y:5.24,description:"Cement & limestone industry."},
  "Dewas":       {x:3.33,y:5.02,description:"Industrial city near Indore."},
  "Ratlam":      {x:3.12,y:5.02,description:"Railway junction city."},
  "Chhindwara":  {x:3.89,y:4.80,description:"Tribal & agriculture district."},
  "Singrauli":   {x:4.52,y:5.24,description:"Energy capital. Coal & power."}
}, edges:[
  {from:"Bhopal",   to:"Indore",     distance:195,speedLimit:80,trafficFactor:1.2},
  {from:"Bhopal",   to:"Sagar",      distance:178,speedLimit:70,trafficFactor:1.2},
  {from:"Bhopal",   to:"Jabalpur",   distance:334,speedLimit:80,trafficFactor:1.2},
  {from:"Bhopal",   to:"Gwalior",    distance:416,speedLimit:80,trafficFactor:1.2},
  {from:"Indore",   to:"Ujjain",     distance:56, speedLimit:70,trafficFactor:1.4},
  {from:"Indore",   to:"Dewas",      distance:36, speedLimit:60,trafficFactor:1.5},
  {from:"Indore",   to:"Ratlam",     distance:130,speedLimit:80,trafficFactor:1.2},
  {from:"Jabalpur", to:"Satna",      distance:175,speedLimit:70,trafficFactor:1.2},
  {from:"Satna",    to:"Rewa",       distance:55, speedLimit:70,trafficFactor:1.2},
  {from:"Rewa",     to:"Singrauli",  distance:168,speedLimit:70,trafficFactor:1.2},
  {from:"Jabalpur", to:"Chhindwara", distance:161,speedLimit:70,trafficFactor:1.3},
  {from:"Gwalior",  to:"Sagar",      distance:283,speedLimit:70,trafficFactor:1.2}
]},

"manipur":{ stateName:"Manipur 🌺", nodes:{
  "Imphal":        {x:8.16,y:5.64,description:"State capital. Gateway to Myanmar."},
  "Thoubal":       {x:8.20,y:5.62,description:"Border trade district."},
  "Bishnupur":     {x:8.13,y:5.56,description:"Handicrafts & Loktak lake."},
  "Churachandpur": {x:8.09,y:5.46,description:"Southern Manipur tribal hub."},
  "Senapati":      {x:8.14,y:5.76,description:"Northern hill district."},
  "Ukhrul":        {x:8.32,y:5.73,description:"Tangkhul Naga cultural hub."}
}, edges:[
  {from:"Imphal",       to:"Thoubal",       distance:32, speedLimit:50,trafficFactor:1.4},
  {from:"Imphal",       to:"Bishnupur",     distance:27, speedLimit:50,trafficFactor:1.3},
  {from:"Imphal",       to:"Senapati",      distance:67, speedLimit:40,trafficFactor:1.5},
  {from:"Imphal",       to:"Ukhrul",        distance:84, speedLimit:40,trafficFactor:1.6},
  {from:"Bishnupur",    to:"Churachandpur", distance:60, speedLimit:40,trafficFactor:1.5},
  {from:"Thoubal",      to:"Ukhrul",        distance:90, speedLimit:40,trafficFactor:1.6}
]},

"meghalaya":{ stateName:"Meghalaya ☁️", nodes:{
  "Shillong":  {x:7.59,y:5.85,description:"State capital. Scotland of East."},
  "Tura":      {x:7.26,y:5.90,description:"Garo Hills commercial center."},
  "Jowai":     {x:7.72,y:5.79,description:"Jaintia Hills district HQ."},
  "Nongstoin": {x:7.41,y:5.86,description:"West Khasi Hills capital."},
  "Williamnagar":{x:7.53,y:5.96,description:"East Garo Hills HQ."},
  "Baghmara":  {x:7.36,y:5.73,description:"South Garo Hills. Coal mines."}
}, edges:[
  {from:"Shillong",  to:"Jowai",       distance:64, speedLimit:50,trafficFactor:1.4},
  {from:"Shillong",  to:"Nongstoin",   distance:100,speedLimit:40,trafficFactor:1.5},
  {from:"Nongstoin", to:"Tura",        distance:175,speedLimit:40,trafficFactor:1.5},
  {from:"Tura",      to:"Williamnagar",distance:170,speedLimit:40,trafficFactor:1.5},
  {from:"Tura",      to:"Baghmara",    distance:95, speedLimit:40,trafficFactor:1.4},
  {from:"Shillong",  to:"Williamnagar",distance:185,speedLimit:40,trafficFactor:1.5}
]},


"mizoram":{ stateName:"Mizoram 🌄", nodes:{
  "Aizawl":   {x:7.82,y:5.34,description:"State capital. Hilly terrain."},
  "Lunglei":  {x:7.78,y:5.13,description:"Second largest city. South."},
  "Saiha":    {x:7.80,y:4.97,description:"Southernmost Mizoram town."},
  "Champhai": {x:7.94,y:5.38,description:"Rice bowl. Myanmar border."},
  "Kolasib":  {x:7.82,y:5.51,description:"Northern gate of Mizoram."},
  "Serchhip": {x:7.84,y:5.26,description:"Most literate district HQ."}
}, edges:[
  {from:"Aizawl",  to:"Lunglei",  distance:186,speedLimit:40,trafficFactor:1.6},
  {from:"Aizawl",  to:"Champhai", distance:194,speedLimit:35,trafficFactor:1.6},
  {from:"Aizawl",  to:"Kolasib",  distance:105,speedLimit:40,trafficFactor:1.5},
  {from:"Aizawl",  to:"Serchhip", distance:75, speedLimit:40,trafficFactor:1.5},
  {from:"Lunglei", to:"Saiha",    distance:150,speedLimit:35,trafficFactor:1.7},
  {from:"Serchhip",to:"Lunglei",  distance:115,speedLimit:40,trafficFactor:1.6}
]},

"nagaland":{ stateName:"Nagaland 🦅", nodes:{
  "Kohima":     {x:8.20,y:5.88,description:"State capital. WWII memorial."},
  "Dimapur":    {x:8.11,y:5.93,description:"Commercial gateway to Nagaland."},
  "Mokokchung": {x:8.24,y:6.05,description:"Cultural capital of Ao Nagas."},
  "Tuensang":   {x:8.43,y:6.05,description:"Eastern Nagaland district HQ."},
  "Wokha":      {x:8.16,y:5.99,description:"Lotha Naga tribal district."},
  "Zunheboto":  {x:8.28,y:5.97,description:"Sumi Naga cultural center."}
}, edges:[
  {from:"Dimapur",   to:"Kohima",    distance:75, speedLimit:50,trafficFactor:1.5},
  {from:"Kohima",    to:"Mokokchung",distance:164,speedLimit:40,trafficFactor:1.5},
  {from:"Kohima",    to:"Wokha",     distance:120,speedLimit:40,trafficFactor:1.5},
  {from:"Kohima",    to:"Zunheboto", distance:148,speedLimit:40,trafficFactor:1.5},
  {from:"Mokokchung",to:"Tuensang",  distance:116,speedLimit:35,trafficFactor:1.6},
  {from:"Wokha",     to:"Mokokchung",distance:67, speedLimit:40,trafficFactor:1.5}
]},

"odisha":{ stateName:"Odisha 🛕", nodes:{
  "Bhubaneswar":{x:5.92,y:4.39,description:"State capital. Temple city."},
  "Cuttack":    {x:5.95,y:4.46,description:"Millennium city. Silver filigree."},
  "Rourkela":   {x:5.55,y:4.89,description:"Steel city. SAIL Rourkela."},
  "Brahmapur":  {x:5.83,y:3.95,description:"Silk city of southern Odisha."},
  "Sambalpur":  {x:5.47,y:4.79,description:"Sambalpuri weave & Hirakud dam."},
  "Puri":       {x:5.96,y:4.32,description:"Jagannath temple. Beach resort."},
  "Balasore":   {x:6.01,y:4.79,description:"ISRO launch station. Port city."},
  "Baripada":   {x:6.07,y:4.81,description:"Simlipal tiger reserve gateway."},
  "Jharsuguda": {x:5.40,y:4.90,description:"Coal & power generation hub."},
  "Koraput":    {x:5.56,y:4.05,description:"Tribal district. Tea gardens."}
}, edges:[
  {from:"Bhubaneswar",to:"Cuttack",   distance:30, speedLimit:60,trafficFactor:1.8},
  {from:"Bhubaneswar",to:"Puri",      distance:65, speedLimit:60,trafficFactor:1.4},
  {from:"Bhubaneswar",to:"Brahmapur", distance:175,speedLimit:80,trafficFactor:1.2},
  {from:"Bhubaneswar",to:"Balasore",  distance:218,speedLimit:80,trafficFactor:1.2},
  {from:"Cuttack",    to:"Balasore",  distance:200,speedLimit:80,trafficFactor:1.2},
  {from:"Balasore",   to:"Baripada",  distance:60, speedLimit:60,trafficFactor:1.3},
  {from:"Sambalpur",  to:"Rourkela",  distance:130,speedLimit:70,trafficFactor:1.2},
  {from:"Sambalpur",  to:"Jharsuguda",distance:55, speedLimit:60,trafficFactor:1.3},
  {from:"Brahmapur",  to:"Koraput",   distance:270,speedLimit:60,trafficFactor:1.4},
  {from:"Bhubaneswar",to:"Sambalpur", distance:332,speedLimit:80,trafficFactor:1.2}
]},

"punjab":{ stateName:"Punjab 🌾", nodes:{
  "Ludhiana":   {x:3.08,y:7.13,description:"Industrial capital. Hosiery hub."},
  "Amritsar":   {x:2.84,y:7.27,description:"Golden Temple. Wagah border."},
  "Jalandhar":  {x:3.00,y:7.21,description:"Sports goods industry hub."},
  "Patiala":    {x:3.14,y:7.01,description:"Royal heritage. Education hub."},
  "Bathinda":   {x:2.82,y:6.88,description:"Thermal power & oil refinery."},
  "Mohali":     {x:3.09,y:7.05,description:"IT city. Near Chandigarh."},
  "Pathankot":  {x:2.97,y:7.46,description:"Gateway to Himachal & J&K."},
  "Hoshiarpur": {x:3.07,y:7.31,description:"Furniture & sports goods."},
  "Gurdaspur":  {x:2.92,y:7.38,description:"Border district near Pakistan."},
  "Ferozepur":  {x:2.72,y:7.06,description:"Border city on Sutlej river."}
}, edges:[
  {from:"Ludhiana",  to:"Jalandhar", distance:79, speedLimit:80,trafficFactor:1.3},
  {from:"Ludhiana",  to:"Patiala",   distance:68, speedLimit:80,trafficFactor:1.3},
  {from:"Ludhiana",  to:"Mohali",    distance:55, speedLimit:80,trafficFactor:1.4},
  {from:"Jalandhar", to:"Amritsar",  distance:82, speedLimit:80,trafficFactor:1.3},
  {from:"Jalandhar", to:"Pathankot", distance:99, speedLimit:70,trafficFactor:1.2},
  {from:"Amritsar",  to:"Gurdaspur", distance:71, speedLimit:70,trafficFactor:1.2},
  {from:"Gurdaspur", to:"Pathankot", distance:60, speedLimit:70,trafficFactor:1.2},
  {from:"Jalandhar", to:"Hoshiarpur",distance:61, speedLimit:70,trafficFactor:1.2},
  {from:"Bathinda",  to:"Ferozepur", distance:95, speedLimit:70,trafficFactor:1.2},
  {from:"Patiala",   to:"Bathinda",  distance:136,speedLimit:70,trafficFactor:1.2}
]},


"rajasthan":{ stateName:"Rajasthan 🏜️", nodes:{
  "Jaipur":         {x:3.15,y:6.22,description:"Pink City. State capital."},
  "Jodhpur":        {x:2.60,y:5.99,description:"Blue City. Sun Fort."},
  "Kota":           {x:3.31,y:5.82,description:"Education city. Chambal."},
  "Bikaner":        {x:2.60,y:6.53,description:"Camel country. Karni Mata."},
  "Ajmer":          {x:3.00,y:6.12,description:"Sufi pilgrimage. Dargah."},
  "Udaipur":        {x:2.81,y:5.71,description:"City of Lakes. Venice of East."},
  "Bharatpur":      {x:3.37,y:6.42,description:"Keoladeo bird sanctuary."},
  "Alwar":          {x:3.26,y:6.46,description:"Sariska tiger reserve gate."},
  "Sikar":          {x:3.03,y:6.39,description:"Shekhawati heritage havelis."},
  "Sri Ganganagar": {x:2.64,y:6.91,description:"Canal irrigated farm city."},
  "Barmer":         {x:2.28,y:5.83,description:"Oil fields & sand dunes."},
  "Chittorgarh":    {x:3.07,y:5.81,description:"Historical Rajput fort city."}
}, edges:[
  {from:"Jaipur",        to:"Ajmer",         distance:135,speedLimit:80,trafficFactor:1.3},
  {from:"Jaipur",        to:"Alwar",         distance:165,speedLimit:80,trafficFactor:1.2},
  {from:"Jaipur",        to:"Sikar",         distance:115,speedLimit:70,trafficFactor:1.2},
  {from:"Jaipur",        to:"Bharatpur",     distance:185,speedLimit:80,trafficFactor:1.2},
  {from:"Jaipur",        to:"Kota",          distance:250,speedLimit:80,trafficFactor:1.2},
  {from:"Ajmer",         to:"Jodhpur",       distance:206,speedLimit:80,trafficFactor:1.2},
  {from:"Ajmer",         to:"Udaipur",       distance:275,speedLimit:80,trafficFactor:1.2},
  {from:"Jodhpur",       to:"Barmer",        distance:206,speedLimit:70,trafficFactor:1.2},
  {from:"Jodhpur",       to:"Bikaner",       distance:249,speedLimit:80,trafficFactor:1.2},
  {from:"Bikaner",       to:"Sri Ganganagar",distance:210,speedLimit:70,trafficFactor:1.2},
  {from:"Udaipur",       to:"Chittorgarh",   distance:115,speedLimit:70,trafficFactor:1.2},
  {from:"Kota",          to:"Chittorgarh",   distance:160,speedLimit:70,trafficFactor:1.2}
]},

"sikkim":{ stateName:"Sikkim 🏔️", nodes:{
  "Gangtok":    {x:6.69,y:6.34,description:"State capital. Tourism hub."},
  "Namchi":     {x:6.63,y:6.21,description:"South Sikkim district HQ."},
  "Jorethang":  {x:6.60,y:6.19,description:"Trade town on Rangit river."},
  "Mangan":     {x:6.68,y:6.47,description:"North Sikkim district HQ."},
  "Gyalshing":  {x:6.57,y:6.30,description:"West Sikkim district HQ."},
  "Ravangla":   {x:6.64,y:6.27,description:"Buddha Park & tea gardens."}
}, edges:[
  {from:"Gangtok",  to:"Mangan",    distance:75, speedLimit:35,trafficFactor:1.5},
  {from:"Gangtok",  to:"Namchi",    distance:80, speedLimit:35,trafficFactor:1.5},
  {from:"Namchi",   to:"Jorethang", distance:20, speedLimit:30,trafficFactor:1.4},
  {from:"Namchi",   to:"Ravangla",  distance:30, speedLimit:30,trafficFactor:1.4},
  {from:"Ravangla", to:"Gyalshing", distance:55, speedLimit:30,trafficFactor:1.5},
  {from:"Gangtok",  to:"Gyalshing", distance:114,speedLimit:35,trafficFactor:1.6}
]},

"tamil_nadu":{ stateName:"Tamil Nadu 🏛️", nodes:{
  "Chennai":       {x:4.39,y:2.40,description:"State capital. Motor city."},
  "Coimbatore":    {x:3.61,y:1.90,description:"Manchester of South India."},
  "Madurai":       {x:3.83,y:1.68,description:"Temple city. Meenakshi Amman."},
  "Tiruchirappalli":{x:4.00,y:1.84,description:"Trichy. Rock fort & textiles."},
  "Salem":         {x:3.88,y:2.07,description:"Steel city. Textile industry."},
  "Tirunelveli":   {x:3.81,y:1.43,description:"Wheat halwa city. South TN."},
  "Vellore":       {x:4.17,y:2.35,description:"Medical & education hub."},
  "Erode":         {x:3.73,y:1.95,description:"Turmeric & textile city."},
  "Tiruppur":      {x:3.68,y:1.92,description:"Knitwear capital of India."},
  "Thoothukudi":   {x:3.90,y:1.44,description:"Port city. Pearl diving."},
  "Dindigul":      {x:3.89,y:1.72,description:"Lock city. Near Palani hills."},
  "Kanchipuram":   {x:4.30,y:2.30,description:"Silk sarees & temple city."}
}, edges:[
  {from:"Chennai",       to:"Vellore",       distance:135,speedLimit:80,trafficFactor:1.3},
  {from:"Chennai",       to:"Kanchipuram",   distance:76, speedLimit:70,trafficFactor:1.4},
  {from:"Vellore",       to:"Salem",         distance:155,speedLimit:80,trafficFactor:1.2},
  {from:"Salem",         to:"Erode",         distance:60, speedLimit:70,trafficFactor:1.3},
  {from:"Erode",         to:"Tiruppur",      distance:35, speedLimit:60,trafficFactor:1.4},
  {from:"Tiruppur",      to:"Coimbatore",    distance:50, speedLimit:70,trafficFactor:1.3},
  {from:"Salem",         to:"Tiruchirappalli",distance:135,speedLimit:80,trafficFactor:1.2},
  {from:"Tiruchirappalli",to:"Madurai",      distance:144,speedLimit:80,trafficFactor:1.2},
  {from:"Madurai",       to:"Dindigul",      distance:64, speedLimit:70,trafficFactor:1.3},
  {from:"Madurai",       to:"Tirunelveli",   distance:160,speedLimit:80,trafficFactor:1.2},
  {from:"Tirunelveli",   to:"Thoothukudi",   distance:52, speedLimit:60,trafficFactor:1.3},
  {from:"Coimbatore",    to:"Madurai",       distance:211,speedLimit:80,trafficFactor:1.2}
]},

"telangana":{ stateName:"Telangana 🌆", nodes:{
  "Hyderabad":   {x:3.89,y:3.59,description:"State capital. IT & Pharma hub."},
  "Warangal":    {x:4.18,y:3.64,description:"Historical Kakatiya capital."},
  "Nizamabad":   {x:3.89,y:3.88,description:"Northern border district."},
  "Karimnagar":  {x:4.09,y:3.82,description:"Granite & steel city."},
  "Khammam":     {x:4.35,y:3.57,description:"Coal & cement industry hub."},
  "Ramagundam":  {x:4.19,y:3.90,description:"NTPC thermal power station."},
  "Mahbubnagar": {x:3.78,y:3.33,description:"Southern border district."},
  "Nalgonda":    {x:4.04,y:3.48,description:"Fluoride affected lake city."},
  "Adilabad":    {x:3.95,y:4.01,description:"Northern tribal district."},
  "Secunderabad":{x:3.91,y:3.60,description:"Twin city of Hyderabad."}
}, edges:[
  {from:"Hyderabad",  to:"Secunderabad",distance:10, speedLimit:50,trafficFactor:2.5},
  {from:"Hyderabad",  to:"Warangal",    distance:148,speedLimit:80,trafficFactor:1.3},
  {from:"Hyderabad",  to:"Nizamabad",   distance:174,speedLimit:80,trafficFactor:1.2},
  {from:"Hyderabad",  to:"Mahbubnagar", distance:113,speedLimit:80,trafficFactor:1.2},
  {from:"Hyderabad",  to:"Nalgonda",    distance:145,speedLimit:80,trafficFactor:1.2},
  {from:"Warangal",   to:"Karimnagar",  distance:87, speedLimit:70,trafficFactor:1.2},
  {from:"Warangal",   to:"Khammam",     distance:135,speedLimit:70,trafficFactor:1.2},
  {from:"Karimnagar", to:"Ramagundam",  distance:52, speedLimit:60,trafficFactor:1.2},
  {from:"Nizamabad",  to:"Adilabad",    distance:120,speedLimit:70,trafficFactor:1.2},
  {from:"Karimnagar", to:"Nizamabad",   distance:115,speedLimit:70,trafficFactor:1.2}
]},


"tripura":{ stateName:"Tripura 🌺", nodes:{
  "Agartala":     {x:7.43,y:5.37,description:"State capital. Near Bangladesh."},
  "Udaipur":      {x:7.42,y:5.27,description:"Tripura Sundari temple city."},
  "Dharmanagar":  {x:7.44,y:5.56,description:"Northern Tripura trade hub."},
  "Kailasahar":   {x:7.49,y:5.54,description:"Unakoti rock carving region."},
  "Belonia":      {x:7.38,y:5.22,description:"South Tripura border town."},
  "Ambassa":      {x:7.44,y:5.44,description:"Railway junction town."}
}, edges:[
  {from:"Agartala",    to:"Udaipur",     distance:55, speedLimit:50,trafficFactor:1.4},
  {from:"Agartala",    to:"Ambassa",     distance:60, speedLimit:50,trafficFactor:1.3},
  {from:"Ambassa",     to:"Kailasahar",  distance:55, speedLimit:45,trafficFactor:1.4},
  {from:"Kailasahar",  to:"Dharmanagar", distance:50, speedLimit:50,trafficFactor:1.3},
  {from:"Udaipur",     to:"Belonia",     distance:55, speedLimit:45,trafficFactor:1.3},
  {from:"Agartala",    to:"Dharmanagar", distance:160,speedLimit:55,trafficFactor:1.3}
]},

"uttar_pradesh":{ stateName:"Uttar Pradesh 🕌", nodes:{
  "Lucknow":    {x:4.57,y:6.20,description:"State capital. Nawabi heritage."},
  "Kanpur":     {x:4.44,y:6.11,description:"Industrial city. Leather hub."},
  "Agra":       {x:3.88,y:6.30,description:"Taj Mahal. Tourist capital."},
  "Varanasi":   {x:4.87,y:5.95,description:"Spiritual capital of India."},
  "Prayagraj":  {x:4.65,y:5.99,description:"Triveni Sangam. Kumbh Mela."},
  "Meerut":     {x:3.67,y:6.56,description:"Sports goods. Near Delhi."},
  "Ghaziabad":  {x:3.57,y:6.54,description:"NCR industrial satellite city."},
  "Noida":      {x:3.55,y:6.51,description:"IT & corporate hub of NCR."},
  "Bareilly":   {x:3.84,y:6.63,description:"Furniture & agriculture city."},
  "Aligarh":    {x:3.79,y:6.41,description:"AMU. Lock manufacturing hub."},
  "Moradabad":  {x:3.74,y:6.67,description:"Brass city of India."},
  "Gorakhpur":  {x:4.85,y:6.35,description:"Lord Buddha's birth region."},
  "Jhansi":     {x:3.86,y:5.89,description:"Rani Laxmibai heritage fort."},
  "Mathura":    {x:3.82,y:6.34,description:"Birthplace of Lord Krishna."}
}, edges:[
  {from:"Lucknow",   to:"Kanpur",     distance:85, speedLimit:80,trafficFactor:1.4},
  {from:"Lucknow",   to:"Prayagraj",  distance:202,speedLimit:80,trafficFactor:1.2},
  {from:"Lucknow",   to:"Gorakhpur",  distance:272,speedLimit:80,trafficFactor:1.2},
  {from:"Lucknow",   to:"Bareilly",   distance:253,speedLimit:80,trafficFactor:1.2},
  {from:"Kanpur",    to:"Prayagraj",  distance:192,speedLimit:80,trafficFactor:1.2},
  {from:"Prayagraj", to:"Varanasi",   distance:125,speedLimit:80,trafficFactor:1.3},
  {from:"Agra",      to:"Mathura",    distance:58, speedLimit:70,trafficFactor:1.4},
  {from:"Agra",      to:"Aligarh",    distance:90, speedLimit:80,trafficFactor:1.3},
  {from:"Agra",      to:"Jhansi",     distance:238,speedLimit:80,trafficFactor:1.2},
  {from:"Meerut",    to:"Ghaziabad",  distance:35, speedLimit:70,trafficFactor:1.8},
  {from:"Ghaziabad", to:"Noida",      distance:20, speedLimit:60,trafficFactor:2.0},
  {from:"Meerut",    to:"Moradabad",  distance:87, speedLimit:70,trafficFactor:1.3},
  {from:"Moradabad", to:"Bareilly",   distance:75, speedLimit:70,trafficFactor:1.3},
  {from:"Aligarh",   to:"Mathura",    distance:60, speedLimit:70,trafficFactor:1.3}
]},

"uttarakhand":{ stateName:"Uttarakhand 🏔️", nodes:{
  "Dehradun":   {x:3.77,y:7.16,description:"State capital. Forest city."},
  "Haridwar":   {x:3.73,y:7.10,description:"Har Ki Pauri. Ganga aarti."},
  "Roorkee":    {x:3.72,y:7.09,description:"IIT Roorkee. Canal city."},
  "Haldwani":   {x:3.91,y:6.97,description:"Gateway to Kumaon hills."},
  "Rudrapur":   {x:3.89,y:6.97,description:"Industrial city. SIDCUL zone."},
  "Kashipur":   {x:3.86,y:7.00,description:"Ancient city on Ramganga."},
  "Rishikesh":  {x:3.76,y:7.12,description:"Yoga capital. Adventure sports."},
  "Nainital":   {x:3.97,y:6.96,description:"Lake city. Tourism hub."},
  "Almora":     {x:4.04,y:7.04,description:"Cultural capital of Kumaon."},
  "Pithoragarh":{x:4.16,y:7.14,description:"Border district with Nepal."}
}, edges:[
  {from:"Dehradun",  to:"Haridwar",   distance:55, speedLimit:60,trafficFactor:1.4},
  {from:"Dehradun",  to:"Rishikesh",  distance:43, speedLimit:50,trafficFactor:1.4},
  {from:"Haridwar",  to:"Roorkee",    distance:35, speedLimit:60,trafficFactor:1.3},
  {from:"Haridwar",  to:"Haldwani",   distance:192,speedLimit:70,trafficFactor:1.2},
  {from:"Haldwani",  to:"Rudrapur",   distance:25, speedLimit:60,trafficFactor:1.4},
  {from:"Rudrapur",  to:"Kashipur",   distance:35, speedLimit:60,trafficFactor:1.3},
  {from:"Haldwani",  to:"Nainital",   distance:35, speedLimit:40,trafficFactor:1.5},
  {from:"Nainital",  to:"Almora",     distance:67, speedLimit:40,trafficFactor:1.5},
  {from:"Almora",    to:"Pithoragarh",distance:122,speedLimit:40,trafficFactor:1.5}
]},

"west_bengal":{ stateName:"West Bengal 🐯", nodes:{
  "Kolkata":     {x:6.62,y:5.02,description:"City of Joy. Cultural capital."},
  "Asansol":     {x:6.38,y:5.26,description:"Mining & steel industry city."},
  "Siliguri":    {x:6.50,y:6.34,description:"Gateway to Darjeeling & NE India."},
  "Durgapur":    {x:6.40,y:5.22,description:"Steel city. West Bengal 2nd city."},
  "Bardhaman":   {x:6.48,y:5.16,description:"Rice bowl. Cultural city."},
  "Malda":       {x:6.34,y:5.83,description:"Mango capital. Historic Gaur."},
  "Baharampur":  {x:6.31,y:5.56,description:"Silk weaving district HQ."},
  "Howrah":      {x:6.59,y:5.03,description:"Howrah bridge. Twin of Kolkata."},
  "Kharagpur":   {x:6.46,y:4.77,description:"IIT Kharagpur. Railway hub."},
  "Haldia":      {x:6.62,y:4.82,description:"Petrochemical port complex."},
  "Darjeeling":  {x:6.49,y:6.48,description:"Tea estates. Toy train. Hill station."},
  "Jalpaiguri":  {x:6.44,y:6.33,description:"Tea gardens. Duars forests."}
}, edges:[
  {from:"Kolkata",   to:"Howrah",     distance:8,  speedLimit:40,trafficFactor:2.5},
  {from:"Kolkata",   to:"Bardhaman",  distance:108,speedLimit:80,trafficFactor:1.3},
  {from:"Kolkata",   to:"Kharagpur",  distance:128,speedLimit:80,trafficFactor:1.2},
  {from:"Kolkata",   to:"Haldia",     distance:130,speedLimit:70,trafficFactor:1.3},
  {from:"Bardhaman", to:"Durgapur",   distance:43, speedLimit:70,trafficFactor:1.3},
  {from:"Durgapur",  to:"Asansol",    distance:35, speedLimit:70,trafficFactor:1.3},
  {from:"Bardhaman", to:"Baharampur", distance:152,speedLimit:70,trafficFactor:1.2},
  {from:"Baharampur",to:"Malda",      distance:110,speedLimit:70,trafficFactor:1.2},
  {from:"Malda",     to:"Siliguri",   distance:285,speedLimit:80,trafficFactor:1.2},
  {from:"Siliguri",  to:"Jalpaiguri", distance:41, speedLimit:60,trafficFactor:1.3},
  {from:"Jalpaiguri",to:"Darjeeling", distance:75, speedLimit:35,trafficFactor:1.7}
]},

// === UNION TERRITORIES ===
"delhi":{ stateName:"Delhi (NCT) 🏛️", nodes:{
  "New Delhi":      {x:3.54,y:6.69,description:"National capital. Parliament."},
  "Old Delhi":      {x:3.56,y:6.71,description:"Red Fort. Chandni Chowk."},
  "Dwarka":         {x:3.46,y:6.63,description:"Southwest Delhi township."},
  "Rohini":         {x:3.52,y:6.78,description:"North Delhi residential hub."},
  "Noida Border":   {x:3.60,y:6.64,description:"East Delhi NCR gateway."},
  "Gurugram Border":{x:3.47,y:6.58,description:"South Delhi NCR gateway."},
  "Connaught Place":{x:3.54,y:6.69,description:"Central business district."},
  "Saket":          {x:3.52,y:6.63,description:"South Delhi. Shopping malls."}
}, edges:[
  {from:"New Delhi",      to:"Old Delhi",       distance:5,  speedLimit:30,trafficFactor:3.0},
  {from:"New Delhi",      to:"Connaught Place",  distance:3,  speedLimit:30,trafficFactor:2.5},
  {from:"Connaught Place",to:"Rohini",           distance:20, speedLimit:50,trafficFactor:2.0},
  {from:"Connaught Place",to:"Dwarka",           distance:20, speedLimit:50,trafficFactor:2.0},
  {from:"Connaught Place",to:"Saket",            distance:15, speedLimit:40,trafficFactor:2.0},
  {from:"Dwarka",         to:"Gurugram Border",  distance:18, speedLimit:60,trafficFactor:2.0},
  {from:"Saket",          to:"Noida Border",     distance:20, speedLimit:50,trafficFactor:2.0},
  {from:"Rohini",         to:"Old Delhi",        distance:15, speedLimit:40,trafficFactor:2.2}
]},

"jammu_kashmir":{ stateName:"Jammu & Kashmir ❄️", nodes:{
  "Srinagar":  {x:2.88,y:8.20,description:"Summer capital. Dal Lake."},
  "Jammu":     {x:2.89,y:7.82,description:"Winter capital. Vaishno Devi."},
  "Anantnag":  {x:2.97,y:8.05,description:"Apple orchards. Pahalgam gate."},
  "Baramulla":  {x:2.75,y:8.26,description:"Uri dam. Border district."},
  "Udhampur":  {x:2.97,y:7.91,description:"Strategic railway hub."},
  "Kathua":    {x:2.96,y:7.72,description:"Southern gateway to J&K."},
  "Sopore":    {x:2.78,y:8.27,description:"Apple trading hub."},
  "Pulwama":   {x:2.90,y:8.14,description:"Kashmiri wazwan cuisine."}
}, edges:[
  {from:"Jammu",    to:"Udhampur",  distance:68, speedLimit:60,trafficFactor:1.4},
  {from:"Udhampur", to:"Srinagar",  distance:196,speedLimit:50,trafficFactor:1.6},
  {from:"Jammu",    to:"Kathua",    distance:90, speedLimit:70,trafficFactor:1.2},
  {from:"Srinagar", to:"Anantnag",  distance:55, speedLimit:50,trafficFactor:1.4},
  {from:"Srinagar", to:"Baramulla", distance:56, speedLimit:50,trafficFactor:1.4},
  {from:"Srinagar", to:"Pulwama",   distance:35, speedLimit:50,trafficFactor:1.5},
  {from:"Baramulla",to:"Sopore",    distance:25, speedLimit:45,trafficFactor:1.4},
  {from:"Anantnag", to:"Pulwama",   distance:30, speedLimit:45,trafficFactor:1.4}
]}

};

// ─── Helper: get sorted list of state keys ───────────────────────────────────
function getStateList() {
  return Object.keys(INDIA_STATE_MAPS).sort();
}

