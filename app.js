import express from 'express';
import bodyParser from 'body-parser';
import _ from "lodash";
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "dk_prod_6XTAWTETF648P3GBSFDWNBKKY17P" });
const festivals = [
{
    "name": "Diwali",
    "date": "4th Nov 2021",
    "region": "All over India",
    "imagelink": "https://unsplash.com/photos/xisPXJqwQkA",
    "info": " Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, Sikhs and some Buddhists The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November) One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual 'victory of light over darkness, good over evil, and knowledge over ignorance'The festival is widely associated with Lakshmi, goddess of prosperity, with many other regional traditions connecting the holiday to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Hanuman, Ganesha, Kubera, Dhanvantari, or Vishvakarman Furthermore, it is, in some regions, a celebration of the day Lord Rama returned to his kingdom Ayodhya with his wife Sita and his brother Lakshmana after defeating Ravana in Lanka and serving 14 years of exile"
},

{
    "name":"Christmas ",
    "celebrated_when":"25th Dec 2021",
    "region":" Mostly celebrated in Shillong,Pondicherry,Kerala,Mumbai,Kolkata,Bangalore,Sikkim,Manali,etc",
    "imagelink":"https://www.authenticindiatours.com/uploads/Christmas%20in%20Kerala%20%281%29-compressed%20%281%29.jpg",
    "info":"The day known as Christmas Day is celebrated on the 25th day of December. It is one of the most important days of the year for Christians, along with Easter when the death and resurrection of Jesus are celebrated. The season of preparing for Christmas is called Advent and begins on a Sunday about four weeks before Christmas. The Christmas Season (called Christmastide) ends 6 January or the Twelfth Day of Christmas, in which Epiphany is remembered. Christmas is celebrated all over the world, as a religious holiday or as a time of celebration by Christians and non-Christians alike. The traditions are different from country to country, but they nearly always include a feast, giving gifts or cards, and enjoying church or public festivities such as singing Christmas carols and songs. Santa Claus is a tradition in many countries of the world",
  },

  {
    "name":"Pongal",
    "celebrated_when":"14th Jan 2022",
    "region":"Tamil Nadu, Karnataka, Andhra Pradesh, Telangana and Puducherry.",
    "imagelink":"https://i.ytimg.com/vi/qgSwHsGaY48/maxresdefault.jpg",
    "info":"The term 'Pongal' is derived from Tamil literature which means 'to boil'. It is an ancient festival of South India, particularly Tamils. It is basically a harvest festival which is celebrated for four-day-long in Tamil Nadu in the month of January-February (Thai) during the solar equinox after harvesting crops like rice, sugarcane, turmeric, etc. Pongal festival is a four-day celebration affair. Each day marked by different festivities- First day is called the Bhogi festival; the Second day is called Thai Pongal; the Third day is called Mattu Pongal; the Fourth day is called Kaanum Pongal.",
  },

  {
    "name":"Makarsankranti",
    "celebrated_when":"14th Jan 2022",
    "region":"Maharashtra, Gujarat and Haryana",
    "imagelink":"https://unsplash.com/photos/uCyX_xn8Y1I",
    "info":" Makarsankranti is the first major festival to be celebrated in India and usually takes place in January, this year the festival will be celebrated on January 14. Makar Sankranti is a major harvest festival celebrated by Hindus across India, however different states celebrated the festival under different names, traditions and festivities. Makar Sankranti marks the end of winter as well as the beginning of longer days on account of the sun's northward journey, this period is also known as Uttarayan on this account and is considered to be very auspicious. The harvest festival is both a religious as well as seasonal observance, and is dedicated to Lord Surya, the Sun God and marks the sun's transit into Makara (Capricorn) raashi (zodiac sign). The festival is majorly celebrated in the Indian Subcontinent and also by Indians and Hindus around the world. The festivities related to Makar Sankranti have many names depending on the region it is being celebrated in. For example, by north Indian Hindus and Sikhs, it is called Maghi and is preceded by Lohri. It is called Makara Sankranti and also Poush sôngkrānti in Maharashtra, Goa, Andhra Pradesh, West Bengal, Karnataka and Telangana, Sukarat in central India, Magh Bihu by Assamese, and Thai Pongal or Pongal by Tamils.",
  },

  {
    "name":"Republic day",
    "celebrated_when":"26th Jan 2022",
    "region":"All across India",
    "imagelink":"https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/23/Pictures/rd-parade-s-full-dress-rehearsal_53613cfa-3dd1-11ea-ae56-f909945546d5.jpg",
    "info":"Republic Day is a national holiday in India, when the country marks and celebrates the date on which the Constitution of India came into effect on 26, January 1950, replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.[1] The day also marks the transition of India from an autonomous Commonwealth realm with British Monarch as nominal head of the Indian Dominion, to a fully sovereign Commonwealth republic with the President of India as the nominal head of the Indian Union. The Constitution was adopted by the Indian Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950 with a democratic government system, completing the country's transition towards becoming an independent republic. 26 January was chosen as the date for Republic day because it was on this day in 1929 when the Declaration of Indian Independence (Purna Swaraj) was proclaimed by the Indian National Congress in lieu of the Realm status as a Dominion later instated by the departing British Regime. The main Republic Day celebration is held in the national capital, New Delhi, at the Rajpath before the President of India. On this day, ceremonious parades take place at the Rajpath, which are performed as a tribute to India; its unity in diversity and rich cultural heritage.",
  },

  {
    "name":"Holi",
    "celebrated_when":"19th March 2022",
    "region":"Bihar,Gujrat,Maharashtra,UP,West Bengal, Uttarakhand, Punjab,Rajsthan,etc",
    "imagelink":"https://unsplash.com/photos/LtE6W_JVTGc",
    "info":" Holi is a Festival Of Colors In India. The Holi in India is a celebration of the victory of good over evil, the destruction of the demoness Holika. It is celebrated every year on the day after the full moon in the Hindu month of Phalguna which is early March. People celebrate the start of spring and other events in the Hindu religion; they march the streets and spray people with colored powders while dancing and singing. Though it is a Hindu festival, it is popular among non-Hindus. People gather the night before Holi and perform religious rituals and then pray for the destruction of their internal evil. The next morning people start the real carnival traditions and smear each other with colored powders; they sometimes use water guns and water-filled balloons for more fun. Groups of people march the streets with drums and other instruments, singing and dancing. People also gather with their families and friends to color each other and share Holi delicacies.",
  },

  {
    "name":"Muharram",
    "celebrated_when":"8th Aug 2022",
    "region":"All over india",
    "imagelink":"https://english.cdn.zeenews.com/sites/default/files/2018/09/11/719353-muharram.jpg",
    "info":"As the first month of the Islamic calendar, Muharram marks the beginning of a new Islamic year. This month is the second holiest divine month, right after Ramadan. Muharram is also one of the four sacred months which are mentioned in the Quran, with the seventh month of Rajab and not forgetting the eleventh and twelfth months of Dhu al-Qi' dah and Dhu al-Hijjah. Muharram is of high significance to the Muslim culture, and it serves as a door to new beginnings and new opportunities in the coming year. During this festival, Muslims also pray for forgiveness of sins and, most importantly, commemorate Hussein ibn Ali. Hussein's death commemoration promotes social cohesion, Islamic identity, and even tourism. To the Minangkabau people, located in the central regions West of Sumatra. Tabuk is a remembrance of Muharram. Generally, the Tabuik tradition is a result of two communities of Padang Pariamans. Luckily, their government also steps in, to promote the organization of the event. The Muharram festival is undoubtedly an exciting event. A chance to explore the journey into an Islamic year and culture with the commemoration of imman Hussain ibn Ali."
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
  res.render('festival',{festivals:festivals});
})

app.get('/products',(req,res)=>{
  res.render('products',{})
})

app.get("/festivals/:festivalName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.festivalName);

  festivals.forEach(function(festival){
    const storedTitle = _.lowerCase(festival.name);

    if (storedTitle === requestedTitle) {
      res.render("page", {
      "name":festival.name,
      "celebrate":festival.celebrated_when,
      "info":festival.info,
      "image":festival.imagelink
      });
    }
  });

});


app.get('/signup',(req,res)=>{
  res.render('signup',{})
})
app.post('/',(req,res)=>{

  console.log(req.body.fname)
})
app.listen(8080,()=>{
  console.log("Hello");
})
