const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const festivals = [
{
    "name": "Diwali",
    "celebrated_when": "October or November. This year on 4th Nov",
    "region": "All over India",
    "info": "Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, Sikhs and some Buddhists The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November) One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual 'victory of light over darkness, good over evil, and knowledge over ignorance'The festival is widely associated with Lakshmi, goddess of prosperity, with many other regional traditions connecting the holiday to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Hanuman, Ganesha, Kubera, Dhanvantari, or Vishvakarman Furthermore, it is, in some regions, a celebration of the day Lord Rama returned to his kingdom Ayodhya with his wife Sita and his brother Lakshmana after defeating Ravana in Lanka and serving 14 years of exile"
},

{
    "name":"Christmas",
    "celebrated_when":"25th Dec 2021",
    "region":"Mostly celebrated in Shillong, Pondicherry, Kerala, Mumbai, Kolkata, Bangalore, Sikkim, Manali,etc",
    "info":"The day known as Christmas Day is celebrated on the 25th day of December. It is one of the most important days of the year for Christians, along with Easter when the death and resurrection of Jesus are celebrated. The season of preparing for Christmas is called Advent and begins on a Sunday about four weeks before Christmas. The Christmas Season (called Christmastide) ends 6 January or the Twelfth Day of Christmas, in which Epiphany is remembered. Christmas is celebrated all over the world, as a religious holiday or as a time of celebration by Christians and non-Christians alike. The traditions are different from country to country, but they nearly always include a feast, giving gifts or cards, and enjoying church or public festivities such as singing Christmas carols and songs. Santa Claus is a tradition in many countries of the world",
  },

  {
    "name":"Pongal",
    "celebrated_when":"14th Jan 2022",
    "region":"Tamil Nadu, Karnataka, Andhra Pradesh, Telangana and Puducherry.",
    "info":"The term 'Pongal' is derived from Tamil literature which means 'to boil'. It is an ancient festival of South India, particularly Tamils. It is basically a harvest festival which is celebrated for four-day-long in Tamil Nadu in the month of January-February (Thai) during the solar equinox after harvesting crops like rice, sugarcane, turmeric, etc. Pongal festival is a four-day celebration affair. Each day marked by different festivities- First day is called the Bhogi festival; the Second day is called Thai Pongal; the Third day is called Mattu Pongal; the Fourth day is called Kaanum Pongal.",
  },

  {
    "name":"Makarsankranti",
    "celebrated_when":"14th Jan 2022",
    "region":"Maharashtra, Gujarat and Haryana",
    "info":"Makarsankranti is the first major festival to be celebrated in India and usually takes place in January, this year the festival will be celebrated on January 14. Makar Sankranti is a major harvest festival celebrated by Hindus across India, however different states celebrated the festival under different names, traditions and festivities. Makar Sankranti marks the end of winter as well as the beginning of longer days on account of the sun's northward journey, this period is also known as Uttarayan on this account and is considered to be very auspicious. The harvest festival is both a religious as well as seasonal observance, and is dedicated to Lord Surya, the Sun God and marks the sun's transit into Makara (Capricorn) raashi (zodiac sign). The festival is majorly celebrated in the Indian Subcontinent and also by Indians and Hindus around the world. The festivities related to Makar Sankranti have many names depending on the region it is being celebrated in. For example, by north Indian Hindus and Sikhs, it is called Maghi and is preceded by Lohri. It is called Makara Sankranti and also Poush sôngkrānti in Maharashtra, Goa, Andhra Pradesh, West Bengal, Karnataka and Telangana, Sukarat in central India, Magh Bihu by Assamese, and Thai Pongal or Pongal by Tamils.",
  },

  {
    "name":"Republic day",
    "celebrated_when":"26th Jan 2022",
    "region":"All across India",
    "info":"Republic Day is a national holiday in India, when the country marks and celebrates the date on which the Constitution of India came into effect on 26, January 1950, replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.[1] The day also marks the transition of India from an autonomous Commonwealth realm with British Monarch as nominal head of the Indian Dominion, to a fully sovereign Commonwealth republic with the President of India as the nominal head of the Indian Union. The Constitution was adopted by the Indian Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950 with a democratic government system, completing the country's transition towards becoming an independent republic. 26 January was chosen as the date for Republic day because it was on this day in 1929 when the Declaration of Indian Independence (Purna Swaraj) was proclaimed by the Indian National Congress in lieu of the Realm status as a Dominion later instated by the departing British Regime. The main Republic Day celebration is held in the national capital, New Delhi, at the Rajpath before the President of India. On this day, ceremonious parades take place at the Rajpath, which are performed as a tribute to India; its unity in diversity and rich cultural heritage.",
  },

  {
    "name":"Holi",
    "celebrated when":"19th March 2022",
    "region":"Bihar,Gujrat,Maharashtra,UP,West Bengal, Uttarakhand, Punjab,Rajsthan,etc",
    "info":" Holi is a Festival Of Colors In India. The Holi in India is a celebration of the victory of good over evil, the destruction of the demoness Holika. It is celebrated every year on the day after the full moon in the Hindu month of Phalguna which is early March. People celebrate the start of spring and other events in the Hindu religion; they march the streets and spray people with colored powders while dancing and singing. Though it is a Hindu festival, it is popular among non-Hindus. People gather the night before Holi and perform religious rituals and then pray for the destruction of their internal evil. The next morning people start the real carnival traditions and smear each other with colored powders; they sometimes use water guns and water-filled balloons for more fun. Groups of people march the streets with drums and other instruments, singing and dancing. People also gather with their families and friends to color each other and share Holi delicacies.",
  },
]


const app = new express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const festival = {
  "name":"Diwali",
  "date":"4th Nov 2021",
  "description":"Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, Sikhs and some Buddhists The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November) One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual 'victory of light over darkness, good over evil, and knowledge over ignorance'The festival is widely associated with Lakshmi, goddess of prosperity, with many other regional traditions connecting the holiday to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Hanuman, Ganesha, Kubera, Dhanvantari, or Vishvakarman Furthermore, it is, in some regions, a celebration of the day Lord Rama returned to his kingdom Ayodhya with his wife Sita and his brother Lakshmana after defeating Ravana in Lanka and serving 14 years of exile"
}

app.get('/',(req,res)=>{
  console.log(festivals);
  res.render("main",{festival:festival});
})

app.get('/festivals',(req,res)=>{
  res.render('festival',{festivals:festivals, festival:festival});
})

app.listen(8080,()=>{
  console.log("Hello");
})
